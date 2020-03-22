## Springfield Energy Production & Consumption Dashboard

This project was developed as an assignment for DSC106: Introduction to Data Visualization. 

The purpose of this project was to practice using HTML, CSS, and JavaScript to build a dashboard that details the energy consumption and production for the town of Springfield. The dashboard was replicated from [here](https://drive.google.com/file/d/1ecu-bUlnjURqP6_om8RfkK1n6y8PDHrw/view).

Overall, the process was successful as almost all functionality depicted in the link above was achieved. Only component missing is the shading of day and night on the charts.

However, there are a few modifications that were made to improve the look and feel of the dashboard. These changes include:

- **Changing the overall title of the dashboard**
  
  From a user's perspective, the original title 'Energy Springfield' did not seem to properly reveal the purpose of the dashboard. Also, the picture of Homer Simpson is not the best picture to represent the 'Energy' aspect of Springfield. Up until I started to exam the dashboard's components did I realize what was being depicted. In order to fix this issue, the title was changed to 'Springfield Energy Production & Consumption'. This title reflects the dashboard's purpose more appropriately and allows the user to know exactly what is depicted from the beginning.

- **Changing the title of the area chart**

  The original area chart's title was simply 'Generation MW'. However, this is inconsistent with the fact that output (loads) are also depicted on the negative portion of the area chart. Therefore, the chart's name was changed to 'Generation & Utilization MW'.

- **Adding appropriate colors to the loads in the area chart**

  The loads in the area chart were originally of the color black. However, black is associated with the coal power source. The legend showed the appropriate colors for the loads, but they were not actually reflected on the area chart. Therefore, load colors on the area chart were changed accordingly.

- **Enlarging chart titles**
  
  As a user, the original dashboard made you search for the chart titles as their font sizes were too small. The font was enlarged in order to make it easier for the user to identify the title and purpose of a particular chart.

- **Removing distracting dates/values from the charts**

  In addition to the small font size used for the chart's title, there were also responsive dates and values depicted on the chart that distracted from the title. These flickering values also detract from the user experience and prevents the user from focusing on a particular area. Also, these dates on the charts are redundant as the date is already reflected on the legend. The extent of these responsive values was minimized, and the price and temperature values were left alone as they do not detract from the user experience.

- **Preventing the y-axis of the charts from digging into the data**

  The three charts on the left portion of the dashboard had their y-axis digging into their plotted data. This makes the chart seem cluttered and also difficult to see the y-axis as in the area chart. This was changed to clearly show the y-axis.

- **Changing y-axis range for the price and temperature chart**
  
  The area chart and temperature line chart's y-axis were changed to include the uppermost value which is missing on the original charts. This keeps the y-axis consistent. The y-axis for the price line chart was minimized to max out at 180 as the original's y-axis maxed out at 300. There was not a single value over 180, so 300 is unnecessary.
  
