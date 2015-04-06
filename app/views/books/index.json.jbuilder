json.array!(@books) do |book|
  json.extract! book, :id, :title, :price
  json.created_at book.created_at.strftime('%Y-%m-%d %H:%M')
  json.updated_at book.updated_at.strftime('%Y-%m-%d %H:%M')
  json.url book_url(book, format: :json)
end
