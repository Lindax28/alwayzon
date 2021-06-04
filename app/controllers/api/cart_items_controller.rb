class Api::CartItemsController < ApplicationController
  def index
    if current_user
      @cart_items = current_user.cart_items
    else
      render json: ["Please sign in"], status: 401
    end
    render :index
  end

end
