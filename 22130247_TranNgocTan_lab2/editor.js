let editor;

window.onload = function() {
  editor = CodeMirror(document.getElementById('editor'), {
    lineNumbers: true,
    mode: "python",  // Có thể thay đổi dựa trên bài tập
    theme: "default"
  });
};

function runCode() {
  const code = editor.getValue();
  document.getElementById('output').innerText = "Running code...";
  // Gửi code tới server để thực thi
}

function clearCode() {
  editor.setValue("");
}

function submitCode() {
  const code = editor.getValue();
  // Logic submit code
}
