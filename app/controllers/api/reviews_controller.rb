class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    product = Product.find(params[:product][:id]))
    if product
      @reviews = product.reviews
      render :index
    else
      render json: ["Product not found"], status: 404
    end
  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :product_id, :rating, :title, :body)
  end

end
