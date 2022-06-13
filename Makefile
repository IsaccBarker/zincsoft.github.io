all:
	npx tailwindcss build -i ./src/input.css -o ./dist/output.css
	npx dessi --source=./src --target=./dist

serve:
	python3 -m http.server --dir ./dist
