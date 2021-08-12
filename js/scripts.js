// Long in the Tooth
// Women
// Mythical Beast
// Low-Magic
// True Neutral
// Low Tech
// Morla the Ancient One

$(document).ready(function() {
  $("form#datingQuiz").submit(function(event) {
    const age = $("#ageGroup").val();
    const gender = $("#gender").val();
    const species = $("#species").val();
    const magic = $("#magicLevel").val();
    const alignment = $("#alignment").val();
    const tech = $("#techLevel").val();
  
  if (age === 'old' && gender === 'women' && species === 'mythicalBeast' && magic === 'lowMagic' || magic === 'highMagic' && alignment === "neutralNeutral" && tech === 'lowTech') {
    $('#morla').show();
  } else $('#harry').show();
  $("#getMatch").hide();
  $("#again").show();

  event.preventDefault();
  });

  $("#again").click(function() {
    location.reload();
  });

});
