class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create]

  def index
    product = Product.find(params[:product][:id])
    if product
      @reviews = product.reviews
      render :index
    else
      render json: ["Product not found"], status: 404
    end
  end

  def create
    @review = Review.find_by(user_id: params[:review][:user_id].to_i, product_id: params[:review][:product_id].to_i)
    if @review
      @review.title = params[:review][:title]
      @review.body = params[:review][:body]
      @review.rating = params[:review][:rating]
    else
      @review = current_user.reviews.new(review_params)
    end

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
