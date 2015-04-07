class BooksController < ApplicationController
  before_action :set_book, only: [:update, :destroy]

  # GET /books
  # GET /books.json
  def index
    q = params.permit(:sort, :order, :page)
    @books = Book.order(:id => :desc)
             .page(q.fetch(:page, 1))
  end

  # GET /books/1
  # GET /books/1.json
  def show
    respond_to do |format|
      format.html { render :index }
      format.json { set_book }
    end
  end

  # GET /books/new
  def new
    @book = Book.new
    render :index
  end

  # GET /books/1/edit
  def edit
    render :index
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: { notice: 'Book was successfully created.', location: book_path(@book) }, status: :created
    else
      render json: @book.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    if @book.update(book_params)
      render json: { notice: 'Book was successfully updated.', location: book_path(@book) }, status: :ok
    else
      render json: @book.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    respond_to do |format|
      format.json { render json: { notice: 'Book was successfully destroyed.' } }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :price)
    end
end
