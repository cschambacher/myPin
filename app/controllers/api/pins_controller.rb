class Api::PinsController < ApplicationController
    def new
        @pin = Pin.new(user_id: current_user.id)
        render :new
    end
    
    def index
        @pins = user.pins
    end

    def show
        if pin
            render :show
        else
            render json: pin.errors.full_messages, status: 404
        end
    end

    def create
        @pin = current_user.pins.new(pin_params)
        if pin.save
            render :show
        else
            render json: pin.errors.full_messages, status: 422
        end
    end

    def edit
        pin
        render :edit
    end

    def destroy
        pin.destroy
        render :show
    end

    def update
        if pin_params[:photo] == "undefined" && pin.update(update_pin_params)
            render :show
        elsif pin.update(pin_params)
            render :show
        else
            render json: pin.errors.full_messages, status: 422
        end
    end

    private

    def user
        @user ||= User.find(params[:user_id])
    end

    def pin
        @pin ||= current_user.pins.find(params[:id])
    end

    def pin_params
        params.require(:pin).permit(:title, :description, :photo, :author_id)
    end

    def update_pin_params
        params.require(:pin).permit(:title, :description, :author_id)
    end
end
