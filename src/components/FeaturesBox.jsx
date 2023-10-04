import "../styles/FeaturesBox.css";
import AttributesContent from "./AttributesContent";


const FeaturesBox = () => {

  return (
    <div className="FeaturesBox">
      <div className="group">
          <AttributesContent title={'Rasgos y atributos'} position={0}></AttributesContent>
          <AttributesContent title={'Inventario y notas'} position={1}></AttributesContent>
      </div>
    </div>
  );
};

export default FeaturesBox