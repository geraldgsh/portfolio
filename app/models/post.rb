class Post < ApplicationRecord
	#This validates presence of title, and makes sure that the length is not more than 140 words
	validates :title, presence: true, length: {maximum: 140}
	#This validates presence of body
	validates :body, presence: true
	include Elasticsearch::Model
	include Elasticsearch::Model::Callbacks

	settings do
		mappings dynamic: false do
			indexes :title, type: :text, analyzer: :english
			indexes :body, type: :text, analyzer: :english
        end
    end
	def self.search_published(query)
	  self.search({
	    query: {
	      bool: {
	        must: [
	        {
	          multi_match: {
	            query: query,
	            fields: [:author, :title, :body, :tags]
	          }
	        }]
	      }
	    }
	  })
	end
end
