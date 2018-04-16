//Angela Rae
//CPSC313
//Assignment 3
//Feb 8, 2018

final int LABEL_WIDTH = 20, PADDING = 20;
Table winsTable, lossesTable;
int graphWidth, graphHeight, selectedTeam, numGames, numTeams, teamWins, totalGames;
final float MAX_PERCENT = 1, MIN_PERCENT = 0;
PFont f;
StringDict teamColors;

void setup() {
  //set size of 
  size(750, 600);
  graphWidth = width - LABEL_WIDTH - (PADDING * 2);
  graphHeight = height - (PADDING * 2);

  f = createFont("Lucida Sans Regular", 10, true);
  
  //load in tables
  winsTable = loadTable("wins.csv");
  lossesTable = loadTable("losses.csv");
  numGames = winsTable.getColumnCount() - 1;
  numTeams = winsTable.getRowCount();
  selectedTeam = 19;

  //create dictionary to hold team colors
  teamColors = new StringDict();
  setTeamColors();
  
  noLoop(); //keeps draw from being run multiple times (lines won't darken)
}

void keyPressed() {
  //if up key is pressed, go up one team on csv sheet
  if (keyCode == UP) {
    selectedTeam = (selectedTeam % numTeams) - 1;
    if (selectedTeam == -1) {
      selectedTeam = numTeams - 1;
    }
  //if down key pressed, go down one team
  } else if (keyCode == DOWN) {
    selectedTeam = (selectedTeam + 1) % numTeams;    
  }
  redraw();
}

void draw() {
  float winningPercent = 0, selectedTeamEndPercent = 0;
  //reset background
  clear();
  background(255);

  //set width of each data point
  float eachWidth = float(graphWidth) / float(numGames);

  //for each row in table (team)
  for (int i = 0; i < numTeams; i++) {
    //set values, get rows from table to read from
    teamWins = totalGames = 0; 
    TableRow winsRow = winsTable.getRow(i);
    TableRow lossesRow = lossesTable.getRow(i);

    //begin drawing line at mid-point of left side
    noFill();
    stroke(getTeamColor(i), 60);
    strokeWeight(1);
    //for current team, make line thicker and colored with team color
    if (i == selectedTeam) {
      stroke(getTeamColor(i), 255);
      strokeWeight(2);
    };
    beginShape();
    vertex(PADDING + LABEL_WIDTH, (height / 2));

    //for each data point, use current wins and losses to plot winning percentage
    for (int j = 0; j < numGames; j++) {
      teamWins = winsRow.getInt(j+1);
      totalGames = lossesRow.getInt(j+1) + teamWins;
      float pointX = (eachWidth * j) + LABEL_WIDTH + PADDING;
      winningPercent = calculatePercentage(teamWins, totalGames);
      vertex(pointX, scaleValue(winningPercent));
    }
    if (i == selectedTeam) {
      selectedTeamEndPercent = winningPercent * 100;
    }
    endShape();
  }
  
  //write team name in bottom right corner
  highlightTeam(selectedTeamEndPercent);
  
  //write percent values on left edge
  textFont(f);
  fill(0);
  for (float i = 0; i <= 1.05; i += .1){
    println(i);
    textAlign(LEFT, CENTER);
    text(int(i*100) + "%", PADDING, scaleValue(i));
  }
  
}

/*
  Takes as parameters the wins and losses 
  Returns the winning percentage of a team
*/
float calculatePercentage(int currentWins, int currentTotal) {
  float percent = 0;
  //if 0 games played, record winning percent as 0 
  if (currentTotal < 1) {
    percent = 0;
  }
  //otherwise, calculate percent of games won / games played
  else {
    percent = float(currentWins) / float(currentTotal);
  }
  return percent;
}

/*
  Takes as a parameter an integer 
  Returns the float that corresponds to its relative height
*/
float scaleValue(float in) {
  float scaledPercent = (in - MIN_PERCENT) / (MAX_PERCENT - MIN_PERCENT);
  return (graphHeight + PADDING) - (graphHeight * scaledPercent);
}

/*
  For the currently selected team, writes their name in the lower right corner in team color
*/
void highlightTeam(float winningPercent) {
  //create a white square over previous text
  noStroke();
  fill(255);
  rect(width - 50, height - 50, 50, 50); 

  //get team color from current team #
  int encodedColor = getTeamColor(selectedTeam);
  //write name of current team in bottom right corner
  textFont(f);
  fill(encodedColor);
  textAlign(RIGHT, BOTTOM);
  textSize(20);
  String teamName = winsTable.getString(selectedTeam, 0);
  text(teamName + " - " + winningPercent + "%", width - PADDING, height - PADDING);
}

/*
  Takes team number int as parameter 
  Returns the int that corresponds to its team color
*/
int getTeamColor(int teamNumber) {
  String teamName = winsTable.getString(teamNumber, 0);
  String strColor = teamColors.get(teamName);
  return unhex(strColor);
}

/* 
  Creates a dictionary containing team codes as keys and team colors as values
  Colors chosen from https://teamcolorcodes.com/mlb-color-codes/
*/
void setTeamColors() {
  teamColors.set("ANA", "FF003263"); //midnight blue
  teamColors.set("ARI", "FFA71930"); //sedona red
  teamColors.set("ATL", "FF13274F"); //navy
  teamColors.set("BAL", "FFDF4601"); //orange
  teamColors.set("BOS", "FFBD3039"); //red
  teamColors.set("CHA", "FF0E3386"); //blue
  teamColors.set("CHN", "FF000000"); //black
  teamColors.set("CIN", "FFC6011F"); //red
  teamColors.set("CLE", "FF002B5C"); //navy blue
  teamColors.set("COL", "FF33006F"); //rockies purple
  teamColors.set("DET", "FF0C2C56"); //navy
  teamColors.set("HOU", "FFEB6E1F"); //orange
  teamColors.set("KCA", "FF7AB2DD"); //powder blue
  teamColors.set("LAN", "FF223B75"); //dodger blue
  teamColors.set("MIA", "FFFF6600"); //orange
  teamColors.set("MIL", "FF0A2351"); //navy blue
  teamColors.set("MIN", "FFD31145"); //scarlet red
  teamColors.set("NYA", "FFFF5910"); //orange
  teamColors.set("NYN", "FF132448"); //navy blue
  teamColors.set("OAK", "FF003831"); //green
  teamColors.set("PHI", "FFE81828"); //red
  teamColors.set("PIT", "FFFDB827"); //yellow
  teamColors.set("SDN", "FF002D62"); //navy blue
  teamColors.set("SEA", "FF006C67"); //northwest green
  teamColors.set("SFN", "FFFD5A1E"); //orange
  teamColors.set("SLN", "FFC41E3A"); //cardinal red
  teamColors.set("TBA", "FF092C5C"); //navy blue
  teamColors.set("TEX", "FFC0111F"); //red
  teamColors.set("TOR", "FF134A8E"); //blue
  teamColors.set("WAS", "FFAB0003"); //red
}