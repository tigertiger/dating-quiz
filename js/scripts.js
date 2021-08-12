// Long in the Tooth
// Women
// Mythical Beast
// Low-Magic
// True Neutral
// Low Tech
// Morla the Ancient One

$(document).ready(function() {
  $("form#datingQuiz").submit(function(event) {
    event.preventDefault();
    const age = $("#ageGroup").val();
    const gender = $("#gender").val();
    const species = $("#species").val();
    const magic = $("#magicLevel").val();
    const alignment = $("#alignment").val();
    const tech = $("#techLevel").val();
  
  if (age === 'old' && gender === 'women' && species === 'mythicalBeast' && magic === 'lowMagic' || magic === 'highMagic' && alignment === "neutralNeutral" && tech === 'lowTech') {
    $('#morla').show();
  } 
  else if (age === 'eternal' && gender === 'genderless' || gender === 'none' || gender === 'men' || gender === 'women' && species === 'mythicalBeast' || species === 'nonCorporeal' && magic === 'highMagic' || magic === 'omnipotent' && alignment === 'chaoticEvil' && tech === 'lowTech') {
    $('#cthulu').show();
    console.log("Cthulu??")
  } else {
    console.log("We made it here!");
    $('#harry').show();
  }

  $("#getMatch").hide();
  $("#again").show();
  
  });

  $("#again").click(function() {
    location.reload();
  });

});
