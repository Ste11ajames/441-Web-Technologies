$(document).ready(function () {
    $('#load-data-btn').on('click', function () {
      $.getJSON('data.json', function (data) {
        $('#user-container').empty();
  
        const quakes = data.features;
  
        quakes.forEach(function (quake) {
          const props = quake.properties;
          const coords = quake.geometry.coordinates;
  
          const card = $(`
            <div class="user-card">
              <h3>${props.title}</h3>
              <p><strong>Magnitude:</strong> ${props.mag}</p>
              <p><strong>Location:</strong> ${props.place}</p>
              <p><strong>Type:</strong> ${props.type}</p>
              <p><strong>Time:</strong> ${new Date(props.time).toLocaleString()}</p>
              <p><strong>Tsunami:</strong> ${props.tsunami}</p>
              <p><strong>Depth:</strong> ${coords[2]} km</p>
              <p><a href="${props.url}" target="_blank">View on USGS</a></p>
            </div>
          `);
  
          $('#user-container').append(card);
        });
  
        // backgrounf color plugin
        $('.user-card').changeFont({
          family: 'Georgia',
          size: '17px',
          weight: 'normal',
          color: 'darkgreen',
          background: '#eaffea'
        });
      }).fail(function () {
        alert('Could not load earthquake data!');
      });
    });
  });
  
  