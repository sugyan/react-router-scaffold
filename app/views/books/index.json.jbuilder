json.books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :price
    json.created_at book.created_at.strftime('%Y-%m-%d %H:%M')
    json.updated_at book.updated_at.strftime('%Y-%m-%d %H:%M')
    json.url book_url(book, format: :json)
  end
end
json.pagination do
  json.prev @books.prev_page
  json.next @books.next_page
  json.current @books.current_page
  json.total @books.total_pages
  json.total_count @books.total_count
  json.offset_value @books.offset_value
end
