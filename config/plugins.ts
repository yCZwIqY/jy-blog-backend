export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: 'html',
        editorConfig: {
          language: 'ko_KR',
          height: 500,
          menubar: false,
          extended_valid_elements: 'span, img, small',
          forced_root_block: '',
          convert_urls: false,
          entity_encoding: 'raw',
          plugins: 'code | lists | codesample',
          toolbar:
            'undo redo | styles | bold italic | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | code | codesample',
        },
      },
    },
  },

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
