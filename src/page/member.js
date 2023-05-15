import React from 'react'

export default function Member() {
  return (
<div>

    <body>
    
    <div class="container mt-3">
      <h2>Member </h2>      
      <table class="table table-striped">
        <thead>
          <tr>
          <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src="./images/m1.jpg" width={"50"}/></td>
            <td>Kitty White</td>
            <td>kitty@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/m2.jpg" width={"50"}/></td>
            <td>Kuromi</td>
            <td>Kuromi@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/m3.jpg" width={"50"}/></td>
            <td>Cinnamoroll</td>
            <td>Cinnamoroll@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </body>
    
    </div>
  )
  }