all:
	npx tailwindcss build -i ./src/input.css -o ./src/dist/output.css

watch:
	npx tailwindcss build -i ./src/input.css -o ./src/dist/output.css --watch

serve:
	python3 -m http.server --dir ./src
