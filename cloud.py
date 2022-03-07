import cloudinary

cloudinary.config( 
  cloud_name = "drmatz1gd", 
  api_key = "131393476536135", 
  api_secret = "4fY_98zj1x6QCwk0Dq6cGoFYKuE",
  secure = True
)

print(cloudinary.utils.api_sign_request({
    'timestamp': '12345'
}, '4fY_98zj1x6QCwk0Dq6cGoFYKuE'))