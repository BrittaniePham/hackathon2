class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  before_action :set_menu, only: [:index, :create]

  def index
    render json: @menu.items.order("created_at")
  end

  def page
    x = Item.paginate(:page => params[:page], :per_page => 30).order("created_at")
    render json: x
  end

  def show
    render json: @item
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: error
    end
  end

  def update
    view = @item.view
    if @item.update({view: view+1})
      render json: @item
    else
      render json: error
    end
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def item_params
      params.require(:item).permit(:name, :price, :view, :purchase, :menu_id, :category)
    end
end
