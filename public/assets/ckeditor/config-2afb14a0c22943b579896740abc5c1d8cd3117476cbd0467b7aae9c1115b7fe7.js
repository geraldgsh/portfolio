CKEDITOR.editorConfig = function(config) {
  config.language = 'en';
  config.width = '700';
  config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
  config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  config.filebrowserUploadUrl = "/ckeditor/attachment_files";
  config.extraPlugins = 'pbckcode';

  // PBCKCODE CUSTOMIZATION
  config.pbckcode = {
    // An optional class to your pre tag.
    cls: '',

    // The syntax highlighter you will use in the output view
    highlighter: 'PRISM',

    // An array of the available modes for you plugin.
    // The key corresponds to the string shown in the select tag.
    // The value correspond to the loaded file for ACE Editor.
    modes: [['HTML', 'html'], ['CSS', 'css'], ['PHP', 'php'], ['JS', 'javascript'], ['R', 'ruby']],

    // The theme of the ACE Editor of the plugin.
    theme: 'textmate',

    // Tab indentation (in spaces)
    tab_size: '4'
  };

};
