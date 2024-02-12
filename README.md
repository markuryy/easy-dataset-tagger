# Easy Dataset Tagger

Easy Dataset Tagger is a web-based tool crafted to simplify the process of tagging and captioning images, specifically tailored for preparing datasets for Stable Diffusion model training. This application facilitates the efficient organization, annotation, and exportation of image datasets, making it an invaluable resource for AI researchers, hobbyists, and artists alike.

## Features

- **Intuitive Image Navigation**: Navigate through your dataset with ease using forward and backward controls, or by selecting an image directly from the sidebar preview.
- **Effortless Captioning**: Add detailed captions to your images directly within the app, ensuring your dataset is ready for Stable Diffusion training with rich, descriptive annotations.
- **Dynamic Tagging**: Import a custom list of tags from a `tags.txt` file and apply them to your images with a single click, streamlining the tagging process.
- **Seamless Integration**: Designed to support the preparation of datasets for Stable Diffusion, ensuring compatibility and ease of use.
- **Export Functionality**: Export your tagged and captioned images along with their metadata in a convenient zip file, ready for training your AI models.
- **Modern, Responsive Design**: Enjoy a sleek, Apple-esque user interface that is fully responsive, making dataset tagging accessible on any device.

## Getting Started

To get started with Easy Dataset Tagger, simply clone this repository to your local machine:

```bash
git clone https://github.com/markuryy/easy-dataset-tagger.git
```

Open `index.html` in your preferred web browser to launch the application. No additional setup or dependencies are required to run Easy Dataset Tagger locally.

## Usage

1. **Import Images**: Click on the 'Import Images' button to select and upload your dataset images.
2. **Navigate Images**: Use the arrow buttons or click on an image preview in the sidebar to view different images.
3. **Add Captions**: Type captions for each image in the text box provided below the image display area.
4. **Tagging**: Import a `tags.txt` file containing your tags separated by newlines. Click on any tag button that appears below the caption box to add that tag to the current image's caption.
5. **Save & Export**: Captions are automatically saved when navigating between images. Use the 'Export Data' button to download your dataset along with captions and tags in a zip file named `captioned_images.zip`.

## For Stable Diffusion Training

To prepare your dataset for Stable Diffusion training:

1. Ensure each image is appropriately tagged and captioned, as these annotations play a crucial role in the model's learning process.
2. Export your dataset using the 'Export Data' button.
3. Follow the Stable Diffusion dataset integration guidelines to include your exported dataset in the model training process.

## Contributing

Contributions to Easy Dataset Tagger are welcome! Whether it's feature requests, bug reports, or code contributions, please feel free to open an issue or submit a pull request.

## License

Easy Dataset Tagger is open source and licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

- This project was inspired by the needs of the AI research community for a straightforward, efficient tool for dataset preparation.
- Thanks to all contributors and users for your support and feedback, making Easy Dataset Tagger a valuable tool for AI model training.

---

We hope Easy Dataset Tagger accelerates your AI research and model training efforts. For any questions, suggestions, or contributions, please reach out through GitHub issues or pull requests.
