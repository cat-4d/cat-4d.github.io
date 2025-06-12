// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;

var editor = null;

function loadViewer(url) {
  window.app.load_url(url);

  // Reset the camera settings just in case.
  window.app.set_camera_settings(
    new window.wasmBindings.CameraSettings(
      0.9, // fov_y
      0.0, // x
      0.0, // y
      -4.0, // z
      0.0, // euler_x
      0.0, // euler_y
      0.0, // euler_z
      3.75, // focus_distance
      1.0, // speed_scale
      0.5, // min_focus_distance
      5.5, // max_focus_distance
      -20.0, // min_pitch
      20.0, // max_pitch
      -25.0, // min_yaw
      25.0, // max_yaw
    ),
  );
}

$(document).ready(function () {
  editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
    lineNumbers: false,
    lineWrapping: true,
    readOnly: true,
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  editor.removeTag = CodeMirror.removeTag;
  var cm = $(".CodeMirror");
  cm.editor = editor;
  editor.save();
  editor.setOption("mode", "htmlmixed");

  // resizeAndPlay($('#sparsity')[0]);
});

function copyBibtex() {
  if (editor) {
    navigator.clipboard.writeText(editor.getValue());
  }
}

// function selectCompVideo(methodPill, scenePill, modePill) {
//     // Your existing logic for video selection
//     // var video = document.getElementById("compVideo");
//     select = true;

//     if (activeMethodPill) {
//         activeMethodPill.classList.remove("active");
//     }
//     if (activeScenePill) {
//         activeScenePill.classList.remove("active");
//     }
//     if (modePill) {
//         activeModePill.classList.remove("active");
//         modePill.classList.add("active");
//         activeModePill = modePill;
//     }
//     activeMethodPill = methodPill;
//     activeScenePill = scenePill;
//     methodPill.classList.add("active");
//     scenePill.classList.add("active");
//     method = methodPill.getAttribute("data-value");
//     pill = scenePill.getAttribute("data-value");
//     mode = activeModePill.getAttribute("data-value");

//     // swap video to avoid flickering
//     activeVidID = 1 - activeVidID;
//     var video_active = document.getElementById("compVideo" + activeVidID);
//     video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours_" + mode + ".mp4";
//     video_active.load();
// }
