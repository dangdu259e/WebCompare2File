from flask import Flask, render_template, request
from service import FormartFile
import difflib

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


# Nhan file va doc file ==> chuyen thanh string
@app.route('/uploader', methods=['GET', 'POST'])
def read_file():
    if request.method == 'POST':
        f1 = request.files['file1']
        f2 = request.files['file2']
        filename1, filename2, file1_list, file2_list = FormartFile.fileToString(f1, f2)
        fromfile = filename1
        tofile = filename2
        fromlines = file1_list
        tolines = file2_list
        diff = difflib.HtmlDiff().make_file(fromlines, tolines, fromfile, tofile)
        return render_template('showfile.html', filehtml=diff)


if __name__ == '__main__':
    app.run(debug=False)
