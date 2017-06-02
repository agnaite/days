class Api::V1::DaysController < Api::V1::BaseController

  def index
    respond_with Day.order("created_at").last
  end

  def update
    day = Day.find(params["id"])
    day.update_attributes(day_params)
    respond_with day, json: day
  end

  def create
    respond_with :api, :v1, Day.create(day_params)
  end

  private

  def day_params
    params.require(:day).permit(:id, :count)
  end
end
