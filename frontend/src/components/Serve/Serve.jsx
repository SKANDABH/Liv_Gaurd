import React from 'react'
import './Serve.css'
const Serve = () => {
  const handles= async (e)=>{
    e.preventDefault();
    var formData = new FormData(this);
      var data = {};
      for (var pair of formData.entries()) {
        if (data[pair[0]]) {
          if (!Array.isArray(data[pair[0]])) {
            data[pair[0]] = [data[pair[0]]];
          }
          data[pair[0]].push(pair[1]);
        } else {
          data[pair[0]] = pair[1];
        }
      }
      
      // Display captured data to the user
      var message = "Form data:\n";
      for (var key in data) {
        if (Array.isArray(data[key])) {
          message += key + ": " + data[key].join(', ') + "\n";
        } else {
          message += key + ": " + data[key] + "\n";
        }
      }
      alert(message);
      this.reset();

  }
  return ( 
 <div className='SERbdy'><h1 id="h1">Service Request Form</h1>
    <div className="main">
        <form  action="https://formspree.io/f/mpzgvnnj" method="POST" className='form'>
          {/* <label for="name">Name:</label> */}
          <input type="text" id="name" name="name" placeholder="Name"required/>
          
          {/* <label for="email">Email:</label> */}
          <input type="text" id="email" name="email" placeholder="Email"required/>
          
          {/* <label for="phone">Phone:</label> */}
          <input type="text" id="phone" name="phone" placeholder="Phone"required/>
          
          {/* <label for="service-type">Service Type:</label> */}
          <select id="service-type" name="service-type" required>
            <option value="">Select Service Type</option>
            <option value="Inverter Repair">Inverter Repair</option>
            <option value="Inverter Installation">Inverter Installation</option>
            <option value="Inverter Maintenance">Inverter Maintenance</option>
          </select>
          
          {/* <label for="issue">Issue:</label> */}
          <textarea id="issue" name="issue" rows="4"placeholder="Phrase your issue here" required></textarea>
          
          <label>Indicators in Inverter:</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="indicators[]" value="No Power"/> No Power</label>
            <label><input type="checkbox" name="indicators[]" value="Low Battery"/> Low Battery</label>
            <label><input type="checkbox" name="indicators[]" value="Overload"/> Overload</label>
            <label><input type="checkbox" name="indicators[]" value="Faulty Display"/> Faulty Display</label>
          </div>
          
          <button type="submit" id="btns" href={handles}>Submit</button>
        </form>
        
        <div className="customer-care">
          <h2>Customer Care</h2>
          <p>We're here to help! If you have any questions or need assistance, please don't hesitate to reach out to our customer care team.</p>
          <div className="ccontact-info">
            <p id="serp">Phone: 123-456-7890</p>
          </div>
          <div className="ccontact-info">
            <p id="serp">Email: info@example.com</p>
          </div>
        </div> 
      </div>
      </div>
  )
}

export default Serve