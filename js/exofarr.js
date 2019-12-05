var employees=[
    {
        ephoto:"https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg",
        eid:280,
        ename:"Naveen",
        esal:22000,
        ecom:"TestYantra",
        eedu:"MCA",
        egender:"Male",
        eloc:"Hassana",
        eage:26,
        edoj:new Date('2019/11/29'),
        edesignation:"Junior Developer"
    },
    {
        ephoto:"https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg",
        eid:100,
        ename:"DJ",
        esal:20000,
        ecom:"TestYantra",
        eedu:"BTech",
        egender:"Male",
        eloc:"chennai",
        eage:32,
        edoj:new Date('2018/01/20'),
        edesignation:"Senior Developer"
    },
    {
        ephoto:"https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg",
        eid:622,
        ename:"Nithin",
        esal:25000,
        ecom:"TestYantra",
        eedu:"Mtech",
        egender:"Male",
        eloc:"Bnagalore",
        eage:28,
        edoj:new Date('2019/12/19'),
        edesignation:"Java Developer"
    },
    {
        ephoto:"https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg",
        eid:101,
        ename:"Prasanna",
        esal:35000,
        ecom:"TestYantra",
        eedu:"BE",
        egender:"Male",
        eloc:"Mysore",
        eage:30,
        edoj:new Date('20188/10/09'),
        edesignation:"Full Stack Developer"
    }
];

var emp=[];
    employees.forEach(empdata=>
    {
        emp.push(`

<div class="card" style="width: 18rem;">
  <img src="${empdata.ephoto}" class="card-img-top" alt="...">
  <div class="card">
    <h5 class="card-title">${empdata.ename}</h5>
    <span class="badge badge-success float-right">${empdata.eid}</span>
    <hr class="hr">
    <span class="badge badge-danger float-right">${empdata.edesignation}</span>
    <li class="list-group-item">Salary:${empdata.esal}</li>
    <li class="list-group-item">Location:${empdata.eloc}</li>
    <li class="list-group-item">Education:${empdata.eedu}</li>
    <li class="list-group-item">Age:${empdata.eage}</li>
    <li class="list-group-item">Company:${empdata.ecom}</li>
    <li class="list-group-item">Gender:${empdata.egender}</li>
    <li class="list-group-item">Date Of Joining:${empdata.edoj}</li>



    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `);
        
    });
    document.getElementById("template").innerHTML=emp;
    