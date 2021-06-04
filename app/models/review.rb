class Review < ApplicationRecord
  validates :user_id, :product_id, :rating, :title, :body, presence: true
  validates :user_id, uniqueness: { scope: :product_id }
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :user
  belongs_to :product
end
