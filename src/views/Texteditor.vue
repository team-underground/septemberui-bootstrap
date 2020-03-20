<template>
	<div>
		<h3 class="mb-3">Texteditor</h3>
		<hr>

		<div class="mb-5">
			<h6 class="mb-3">Example 1: CKEditor 5 - Rich text editor component for Vue.js</h6>

			<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
		</div>

		<h6 class="mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<prism-editor language="css" :code="cssCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const code = `<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>`;
const jsCode = `// in your component file

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
	components: {
		ckeditor: CKEditor.component
	},

	data() {
		return {
			editor: ClassicEditor,
			editorConfig: {
				toolbar: {
					items: [
						"heading",
						"bold",
						"italic",
						"link",
						"bulletedList",
						"numberedList",
						"undo",
						"redo"
					]
				}
			},

			editorData:
				"<h4>The three greatest things you learn from traveling</h4><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><h4>Confidence</h4><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>"
		};
	}
};`;

const cssCode = `// add this in your _custom.scss
:root {
	--ck-border-radius: 6px;
}`;

export default {
	components: {
		ckeditor: CKEditor.component
	},

	data() {
		return {
			editor: ClassicEditor,
			editorConfig: {
				toolbar: {
					items: [
						"heading",
						"bold",
						"italic",
						"link",
						"bulletedList",
						"numberedList",
						"undo",
						"redo"
					]
				}
			},

			editorData:
				"<h4>The three greatest things you learn from traveling</h4><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><h4>Confidence</h4><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>",

			code: code,
			jsCode: jsCode,
			cssCode: cssCode
		};
	}
};
</script>

<style lang="scss">
.ck.ck-editor {
	position: relative;
	--ck-border-radius: 6px;
}
.ck.ck-toolbar {
	// background-color: transparent;
	// border: 0;
}
.ck.ck-dropdown {
	// background-color: #dae1e7;
	// border-radius: 6px;
}
.ck.ck-toolbar {
	border-top: 2px solid #dae1e7 !important;
	border-left: 2px solid #dae1e7 !important;
	border-right: 2px solid #dae1e7 !important;
}
.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused),
.ck.ck-editor__main > .ck-editor__editable.ck-focused {
	// border-radius: 6px;
	// margin-top: 2px;
	border: 2px solid #dae1e7 !important;
	padding: 0.375rem 1rem;
}

.ck.ck-editor__main > .ck-editor__editable.ck-focused {
	border-color: lighten(#3490dc, 25%) !important;
}
</style>