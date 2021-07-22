class Api::CartItemsController < ApplicationController
  before_action :require_login

  def create
    # Query for cart item matching current user's id and product id
    cart_item = CartItem.find_by(user_id: current_user.id, product_id: params[:cart_item][:product_id]);
    # If cart item exists, increment quantity, else create new cart item
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
    # If user is signed in, query all cart items for current user
    if current_user
      @cart_items = current_user.cart_items
      render :index
    else
      render json: ["Please sign in"], status: 401
    end
  end

  def update
    # Query or cart item by current user id and product id, and update quantity
    cart_item = CartItem.find_by(user_id: current_user.id, product_id: params[:cart_item][:product_id].to_i)
    cart_item.quantity = params[:cart_item][:quantity]
    cart_item.save
    @cart_items = current_user.cart_items
    render :index
  end

  def destroy
    # Destroy cart item matching cart item id
    @cart_item = CartItem.find(params[:id].to_i)
    @cart_item.destroy
    render :show
  end

end
