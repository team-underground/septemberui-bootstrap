<template>
	<div>
		<h3 class="mb-3">Uploader</h3>
		<hr>

		<p>
			Please use
			<strong>Vue 2 Dropzone</strong> &amp;
			<strong>Vue FilePond</strong> uploader plugin for any image/file uploading purpose. Documentation available at
			<a
				href="https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation"
				target="_blank"
			>https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation</a> and
			<a
				href="https://github.com/pqina/vue-filepond"
				target="_blank"
			>https://github.com/pqina/vue-filepond</a> respectively.
		</p>

		<h6 class="mt-5">Example 1 - Vue 2 Dropzone</h6>
		<vue-dropzone
			id="upload"
			:options="config"
			@vdropzone-success="afterSuccess"
			@vdropzone-removed-file="removeFileFromDropZone"
		></vue-dropzone>

		<div class="my-4 shadow bg-white p-4 rounded">
			<pre class="mb-0">{{ eventImages }}</pre>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5 mb-3">Example 2 - Vue FilePond</h6>

		<file-pond
			name="file"
			ref="file"
			label-idle="Drop files here..."
			allow-multiple="true"
			max-files="3"
			accepted-file-types="image/jpeg, image/png"
			server="http://sumatoboard.test/api/images/upload"
			:files="myFiles"
			@init="handleFilePondInit"
			@processfile="getFile"
			@removefile="removeFile"
		/>
		<div class="my-4 shadow bg-white p-4 rounded">
			<pre class="mb-0">{{ images }}</pre>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-4 mb-3">Sample Server Code</h6>
		<prism-editor language="php" :code="phpCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<vue-dropzone id="upload" :options="config" @vdropzone-success="afterSuccess" @vdropzone-removed-file="removeFile"></vue-dropzone>`;

const jsCode = `import vueDropzone from "vue2-dropzone";
import "../assets/css/vue2Dropzone.css";

export default {
	data() {
		return {
			images: [],

			// Dropzone Config
			config: {
				// endpoint for uploading
				url: "http://tbassam.test/api/feeds/upload",
				maxFilesize: 5, // MB
				maxFiles: 5,
				// chunking: true,
				// chunkSize: 400, // Bytes
				thumbnailWidth: 150, // px
				thumbnailHeight: 150,
				addRemoveLinks: true,
				previewTemplate: this.dropzoneTemplate()
			}
		};
	},

	components: {
		vueDropzone
	},

	methods: {
		// Dropzone Custom Template
		dropzoneTemplate() {
			return \`<div class="dz-preview dz-file-preview">
					<div class="dz-image">
					<img data-dz-thumbnail />
					</div>
					<div class="dz-details">
						<div class="dz-size"><span data-dz-size></span></div>
						<div class="dz-filename"><span data-dz-name></span></div>
					</div>
					<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
					<div class="dz-error-message"><span data-dz-errormessage></span></div>
					<div class="dz-success-mark"><svg class="text-success bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/></svg></div>
					<div class="dz-error-mark"><svg class="fill-current text-danger bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg></div>
				</div>
			\`;
		},

		afterSuccess(file, response) {
			console.log(file.name);
			console.log(response);
			this.eventImages.push({
				filename: file.name,
				serverId: response
			});
		},

		removeFileFromDropZone(file, error, xhr) {
			let fileName = file.xhr.response;

			axios
				.delete("http://sumatoboard.test/api/images/upload", {
					data: {
						file: fileName
					}
				})
				.then(response => {
					console.log(fileName);
					this.eventImages.find((eventImage, index) => {
						if (eventImage.serverId === fileName) {
							this.eventImages.splice(index, 1);
						}
					});
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};`;

const code2 = `<file-pond
	name="file"
	ref="file"
	label-idle="Drop files here..."
	allow-multiple="true"
	max-files="3"
	accepted-file-types="image/jpeg, image/png"
	server="http://sumatoboard.test/api/images/upload"
	:files="myFiles"
	@init="handleFilePondInit"
	@processfile="getFile"
	@removefile="removeFile"
/>`;

const jsCode2 = `// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
	FilePondPluginFileValidateType
	// FilePondPluginImagePreview
);

export default {
	data() {
		return {
			myFiles: [],
			images: []
		};
	},

	components: {
		FilePond
	},

	methods: {
		// Filepond
		handleFilePondInit() {
			console.log("FilePond has initialized");

			// this.myFiles = this.$refs.file.getFiles();
			// console.log(this.myFiles);

			// FilePond instance methods are available on this.$refs.file
		},

		getFile(error, file) {
			console.log(file.filename);
			console.log(file.serverId);
			this.images.push({
				filename: file.filename,
				serverId: file.serverId
			});
		},

		removeFile(nullValue, file) {
			console.log(file.filename);
			let foundImage = this.images.findIndex(
				image => image.filename === file.filename
			);

			console.log(foundImage);

			if (foundImage != -1) {
				this.images.splice(foundImage, 1);
			}
		}
	}
};`;

const phpCode = `// routes/api.php
Route::post('/images/upload', 'UploadController@upload');
Route::delete('/images/upload', 'UploadController@delete');

// Controllers/UploadController.php
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Log;
use Illuminate\\Support\Facades\\Storage;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
    	if ($request->has('file')) {
    		// Upload the file
    		$path = $request->file('file')->store('uploadtests');

	        return $path;
    		// Return the new file name
    	}
    }

    public function delete(Request $request)
    {
    	$requestData = $request->get('file');
    	$data = file_get_contents("php://input");
    	// Log::info($requestData);
    	// Log::info($data);
    	$fileTobeDeleted = $requestData ? $requestData : $data;
    	if ($fileTobeDeleted) {
    		$exists = Storage::disk('public')->exists($fileTobeDeleted);
    		if ($exists) {
    			Storage::delete($fileTobeDeleted);
    		}
    		return 'Deleted';
    	} else {
    		return response('file not found', 500);
    	}
    }
}`;

import axios from "axios";

import vueDropzone from "vue2-dropzone";
import "../assets/css/vue2Dropzone.css";

// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
	FilePondPluginFileValidateType
	// FilePondPluginImagePreview
);

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			code2: code2,
			jsCode2: jsCode2,
			phpCode: phpCode,

			eventImages: [],
			// Dropzone Config
			config: {
				url: "http://sumatoboard.test/api/images/upload",
				// url: "http://teaboard.sumato.tech/api/images/upload",
				maxFilesize: 5, // MB
				maxFiles: 5,
				// chunking: true,
				// chunkSize: 400, // Bytes
				thumbnailWidth: 150, // px
				thumbnailHeight: 150,
				addRemoveLinks: true,
				previewTemplate: this.dropzoneTemplate()
			},

			myFiles: [],
			images: []
		};
	},

	components: {
		vueDropzone,
		FilePond
	},

	methods: {
		// Dropzone Custom Template
		dropzoneTemplate() {
			return `<div class="dz-preview dz-file-preview">
					<div class="dz-image">
					<img data-dz-thumbnail />
					</div>
					<div class="dz-details">
						<div class="dz-size"><span data-dz-size></span></div>
						<div class="dz-filename"><span data-dz-name></span></div>
					</div>
					<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
					<div class="dz-error-message"><span data-dz-errormessage></span></div>
					<div class="dz-success-mark"><svg class="text-success bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/></svg></div>
					<div class="dz-error-mark"><svg class="fill-current text-danger bg-white rounded-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg></div>
				</div>
			`;
		},

		afterSuccess(file, response) {
			console.log(file.name);
			console.log(response);
			this.eventImages.push({
				filename: file.name,
				serverId: response
			});
		},

		removeFileFromDropZone(file, error, xhr) {
			let fileName = file.xhr.response;

			axios
				.delete("http://sumatoboard.test/api/images/upload", {
					data: {
						file: fileName
					}
				})
				.then(response => {
					console.log(fileName);
					this.eventImages.find((eventImage, index) => {
						if (eventImage.serverId === fileName) {
							this.eventImages.splice(index, 1);
						}
					});
				})
				.catch(error => {
					console.log(error);
				});
		},

		// Filepond
		handleFilePondInit() {
			console.log("FilePond has initialized");

			// this.myFiles = this.$refs.file.getFiles();
			// console.log(this.myFiles);

			// FilePond instance methods are available on `this.$refs.pond`
		},

		getFile(error, file) {
			console.log(file.filename);
			console.log(file.serverId);
			this.images.push({
				filename: file.filename,
				serverId: file.serverId
			});
		},

		removeFile(nullValue, file) {
			console.log(file.filename);
			let foundImage = this.images.findIndex(
				image => image.filename === file.filename
			);

			console.log(foundImage);

			if (foundImage != -1) {
				this.images.splice(foundImage, 1);
			}
		}
	}
};
</script>

<style lang="scss">
.filepond--root {
	font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol";
}
/* the background color of the filepond drop area */
.filepond--panel-root {
	background-color: #ffffff;
	border: 2px dashed #dae1e7;
}
.filepond--file-action-button {
	cursor: pointer;
}
</style>