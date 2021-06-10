class Api::CartItemsController < ApplicationController
  before_action :require_login

  def create
    cart_item = CartItem.find(user_id: current_user.id, product_id: params[:cart_item][:product_id]);
    if cart_item
      cart_item.quantity += 1
    else
      cart_item = CartItem.new(user_id: params[:cart_item][:user_id], product_id: params[:cart_item][:product_id], quantity: 1)
    end
    if cart_item.save
      @cart_items = current_user.cart_items
      render :index
    else
      render json: cart_item, status: :unprocessable_entity
    end
  end

  def index
    if current_user
      @cart_items = current_user.cart_items
      render :index
    else
      render json: ["Please sign in"], status: 401
    end
  end

  def update
    cart_item = CartItem.find(user_id: current_user.id, product_id: params[:cart_item][:product_id])
    cart_item.quantity = params[:cart_item][:quantity]
    cart_item.save
    @cart_items = current_user.cart_items
    render :index
  end

  def destroy
    cart_item = CartItem.find(user_id: current_user.id, product_id: params[:cart_item][:product_id])
    cart_item.destroy
    @cart_items = current_user.cart_items
    render :index
  end

end
