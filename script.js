document.addEventListener('DOMContentLoaded', function() {
    const importImagesButton = document.getElementById('import-images');
    const imageInput = document.getElementById('image-input');
    const importTagsButton = document.getElementById('import-tags');
    const tagsInput = document.getElementById('tags-input');
    const imagePreviews = document.getElementById('image-previews');
    const currentImage = document.getElementById('current-image');
    const imageCaption = document.getElementById('image-caption');
    const tagButtons = document.getElementById('tag-buttons');
    const exportDataButton = document.getElementById('export-data');
    const clearAllButton = document.getElementById('clear-all');
    const nextImage = document.getElementById('next-image');
    const prevImage = document.getElementById('prev-image');
    const actionButtonsContainer = document.querySelector('.action-buttons'); // Assuming this is added for Save, Export, Clear buttons

    let images = [];
    let captions = {};

    function resetUI() {
        imagePreviews.innerHTML = '';
        tagButtons.innerHTML = '';
        currentImage.src = '';
        currentImage.alt = 'No image selected';
        imageCaption.value = '';
        captions = {};
    }

    function addImageToSidebar(file, index) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.dataset.index = index;
        img.onclick = () => {
            displayImage(index);
            loadCaption(index);
        };
        imagePreviews.appendChild(img);
    }

    function displayImage(index) {
        const file = images[index];
        currentImage.src = URL.createObjectURL(file);
        currentImage.dataset.index = index;
        loadCaption(index);
    }

    function loadCaption(index) {
        imageCaption.value = captions[`image_${index + 1}`] || '';
    }

    function saveCaption() {
        const index = currentImage.dataset.index;
        if (index !== undefined) {
            captions[`image_${parseInt(index) + 1}`] = imageCaption.value;
        }
    }

    function navigateImages(direction) {
        const index = parseInt(currentImage.dataset.index || '0', 10);
        const newIndex = index + direction;
        if (newIndex >= 0 && newIndex < images.length) {
            saveCaption();
            displayImage(newIndex);
        }
    }

    function exportData() {
        const zip = new JSZip();
        images.forEach((file, index) => {
            const fileName = `image_${index + 1}${file.name.substring(file.name.lastIndexOf('.'))}`;
            zip.file(fileName, file);
            const captionText = captions[`image_${index + 1}`] || '';
            zip.file(`image_${index + 1}.txt`, captionText);
        });

        zip.generateAsync({type:"blob"}).then(function(content) {
            const url = URL.createObjectURL(content);
            const a = document.createElement("a");
            a.href = url;
            a.download = "captioned_images.zip";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    importImagesButton.onclick = () => imageInput.click();
    imageInput.onchange = function(e) {
        Array.from(e.target.files).forEach((file, index) => {
            const newIndex = images.length + 1;
            const renamedFile = new File([file], `image_${newIndex}${file.name.substring(file.name.lastIndexOf('.'))}`, {type: file.type});
            images.push(renamedFile);
            addImageToSidebar(renamedFile, images.length - 1);
        });
        if (images.length === e.target.files.length) displayImage(0); // Only auto-display if these are the first images
    };

    importTagsButton.onclick = () => tagsInput.click();
    tagsInput.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const tags = event.target.result.split('\n');
            tagButtons.innerHTML = ''; // Clear existing tags before adding new ones
            tags.forEach(tag => {
                if (tag.trim()) {
                    const button = document.createElement('button');
                    button.textContent = tag.trim();
                    button.onclick = () => {
                        imageCaption.value += imageCaption.value ? `, ${tag}` : tag;
                    };
                    tagButtons.appendChild(button);
                }
            });
        };
        reader.readAsText(file);
    };

    nextImage.onclick = () => navigateImages(1);
    prevImage.onclick = () => navigateImages(-1);
    clearAllButton.onclick = resetUI;
    exportDataButton.onclick = exportData;

    // Placeholder functionality, if needed
    if (!images.length) {
        currentImage.src = ''; // Placeholder image or style adjustments
        currentImage.alt = 'No image selected';
    }
});
