class Product < ApplicationRecord
  validates :name, :description, :category, :price, presence: true

  has_many :reviews
  has_one_attached :photo
end