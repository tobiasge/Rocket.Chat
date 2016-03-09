RocketChat.settings.addGroup('FileUpload', function() {
	this.add('FileUpload_Enabled', true, {
		type: 'boolean',
		public: true
	});

	this.add('FileUpload_MaxFileSize', 2097152, {
		type: 'int',
		public: true
	});

	this.add('FileUpload_MediaTypeWhiteList', 'image/*,audio/*,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document', {
		type: 'string',
		public: true,
		i18nDescription: 'FileUpload_MediaTypeWhiteListDescription'
	});

	this.add('FileUpload_ProtectFiles', true, {
		type: 'boolean',
		public: true,
		i18nDescription: 'FileUpload_ProtectFilesDescription'
	});

	this.add('FileUpload_Storage_Type', 'GridFS', {
		type: 'select',
		values: [{
			key: 'GridFS',
			i18nLabel: 'GridFS'
		}, {
			key: 'AmazonS3',
			i18nLabel: 'AmazonS3'
		}],
		public: true
	});

	this.section('Amazon S3', function() {
		this.add('FileUpload_S3_Bucket', '', {
			type: 'string',
			enableQuery: {
				_id: 'FileUpload_Storage_Type',
				value: 'AmazonS3'
			}
		});
		this.add('FileUpload_S3_Acl', '', {
			type: 'string',
			enableQuery: {
				_id: 'FileUpload_Storage_Type',
				value: 'AmazonS3'
			}
		});
		this.add('FileUpload_S3_AWSAccessKeyId', '', {
			type: 'string',
			enableQuery: {
				_id: 'FileUpload_Storage_Type',
				value: 'AmazonS3'
			}
		});
		this.add('FileUpload_S3_AWSSecretAccessKey', '', {
			type: 'string',
			enableQuery: {
				_id: 'FileUpload_Storage_Type',
				value: 'AmazonS3'
			}
		});
		this.add('FileUpload_S3_CDN', '', {
			type: 'string',
			enableQuery: {
				_id: 'FileUpload_Storage_Type',
				value: 'AmazonS3'
			}
		});
	});
});
