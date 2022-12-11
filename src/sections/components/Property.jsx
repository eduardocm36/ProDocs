
import '../../styles/property.css'

export function Propertya({img, title, text}) {
  console.log(img);
  console.log(title);
  console.log(text);
  return (
    <div className="pro_Container">
      <div className='property'>
        
        <div className="contProperty1">
            <img src={img} alt="Property One" className='imgProperty'/>
        </div>
        <div className='contProperty2'>
          <h3>{title}</h3>
          <p>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}


export function Propertyb({img, title, text}) {
  console.log(img);
  console.log(title);
  console.log(text);
  return (
    <div className="pro_Container">
      <div className='property'>
        <div className='contProperty2'>
          <h3>{title}</h3>
          <p>
            {text}
          </p>
        </div>
        <div className="contProperty1" data-aos="fade-up">
            <img src={img} alt="Property One" className='imgProperty'/>
        </div>
      </div>
    </div>
  );
}