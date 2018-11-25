
updateRound(rScale, thetaScale)
  line= d3.radialLine()
    .radius()
    .angle()

fetchData()
  d3.json(function(data) {
    globaldata=data
  })


  scales=[
    {
      name:"Dew Point",
      param: "dewpoint",
      min:0,
      max:100
    }
  ]

update(x, y)


updateSquare(data, xScale, yScale)
  //add groups: gxaxis, gyaxis


  line= d3.line()
    .x(return xScale(d[param]))
    .y(return yScale(d[param]))

  xAxis d3.axisBottom(xScale)
  yAxis= d3.axisLeft(yScale)

  //update loop
  append("path")
      .data(data)

  changeXAxis(param)
    line.x(return xScale(d[param])
    min=data.reduce(function(d, low){return d[param]>low?d[param]:low})
    max=data.reduce(function(d, high){return d[param]>low?d[param]:low})
    xScale.domain([min,max])


fetchData() {
  var callbacks={
    update: new Function
  }
    d3.json(function(data){
      callbacks.update(data)
    })

    return callbacks
  }
