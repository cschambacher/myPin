json.extract! pin, :id, :title, :description, :author_id
begin
    json.url asset_path("images/#{@pin.url}")
  rescue
    json.url @pin.url
  end