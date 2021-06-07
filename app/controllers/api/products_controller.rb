class Api::ProductsController < ApplicationController

  def index
    @products = []
    if params[:search]
      search_params.each do |keyword|
        @products.concat(Product.where(":tag = ANY (keywords)", tag: keyword.downcase))
      end
    elsif params[:category]
      @products = Product.where(category: category_params)
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  private

  def search_params
    params[:search].split(' ')
  end

  def category_params
    params[:category]
  end
end

