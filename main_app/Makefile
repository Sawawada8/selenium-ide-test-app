u:
	docker-compose up -d
d:
	docker-compose down
r:
	docker-compose down
	docker-compose up -d
w:
	npm run watch
comp-up:
	docker run --rm --interactive --tty  --volume $(PWD):/app composer composer update
arti-key-g:
	docker-compose exec web php artisan key:generate
