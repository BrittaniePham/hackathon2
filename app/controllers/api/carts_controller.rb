class Api::CartsController < ApplicationController
  before_action :set_cart

  def index
    render json: current_user.carts.all
  end

  def show
    render json: @cart
  end

  def create
    item = Item.where(name: params[:name])
    item_id = item.id
    name = item.name
    cart = Cart.new({user_id: current_user.id, item_id: item_id, name: item.name})
    if cart.save
      render json: cart
    else
      render json: error
    end
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: error
    end
  end

  def destroy
    @cart.destroy
  end

  private

  def set_cart
    @cart = Cart.find(params[:id])
  end

  def cart_params
    params.require(:cart).permit(:user_id, :item_id, :name)
  end
end
