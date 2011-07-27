class Post
  include Mongoid::Document
  field :title
  field :body
  mount_uploader :image, ImageUploader
end
