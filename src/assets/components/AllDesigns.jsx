import close from "../images/close.svg";
import animacion from "../images/designs/Animación.png"
import apiMonedas from "../images/designs/apiMonedas.jpeg"
import arctec from "../images/designs/arctec.png"
import canadian from "../images/designs/canadian.png"
import casaMaya from "../images/designs/casaMaya.png"
import CheckOut from "../images/designs/Checkout.png"
import coffee from "../images/designs/coffe.png"
import corazon from "../images/designs/corazon.jpeg"
import cotline from "../images/designs/cotline.png"
import crunchbox from "../images/designs/crunchbox.png"
import dentalcare from "../images/designs/dentalcare.png"
import flutter from "../images/designs/flutter.jpeg"
import game from "../images/designs/game.jpeg"
import mercadoLibre from "../images/designs/mercadoLibre.jpeg"
import mundonas from "../images/designs/mundonas.png"
import oakley from "../images/designs/oakley.jpeg"
import ods from "../images/designs/ods.png"
import settings from "../images/designs/settings.png"
import sgv from "../images/designs/sgv.jpeg"
import travel from "../images/designs/travel.jpeg"
import travelUni from "../images/designs/travelUni.jpeg"
import unomasuno from "../images/designs/unomasuno.png"
import movies from "../images/designs/movies.png"

function AllDesigns({ setIsOpenDesigns }) {
  return (
    <div>
      <button
        onClick={() => {
          setIsOpenDesigns(false);
        }}
        className="sticky flex justify-center items-center py-4 px-4 top-5 left-[62%] lg:left-[92%] lg:top-9 lg:right-12 z-[52] rounded-full bg-main-black"
      >
        <img className="w-[32px]" src={close} />
        <h2 className="text-2xl font-semibold text-main-white">Close</h2>
      </button>

      <div className="relative px-4 py-8 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-40 lg:grid-">
        <div className="flex flex-col gap-4">
            <a href="https://www.figma.com/file/QgsAkBqbPVbaG3FdAcN7PO/AnimacionWebflow.fig.?node-id=0%3A1&t=qKISB2NdIu57MhTK-1">
                <img className="rounded-xl" src={animacion} alt="img" />
            </a>
            <a href="https://www.figma.com/file/fsgwHp0U2mYsUZqbWY3MKA/Proyectos-Curso-React-Portafolio?node-id=47%3A2&t=qmMrzX3wAfo3sJjb-1">
                <img className="rounded-xl" src={apiMonedas} alt="img" />
            </a>
            <a href="https://www.figma.com/file/MBvOA3joOKVVPI0ThXQOEc/Arctect-Studio?node-id=0%3A1&t=32jjozywPXqAvIND-1">
                <img className="rounded-xl" src={arctec} alt="img" />
            </a>
            <a href="https://www.figma.com/file/r20xLUCUy1GXAb09aKGrIx/YoContigo?node-id=542%3A2&t=uWL51qSNkH8RmlVw-1">
                <img className="rounded-xl" src={canadian} alt="img" />
            </a>
            <a href="https://www.behance.net/gallery/160424625/Casa-Maya">
                <img className="rounded-xl" src={casaMaya} alt="img" />
            </a>
            <a href="https://www.behance.net/gallery/160425325/La-Salle-Checkout">
                <img className="rounded-xl" src={CheckOut} alt="img" />
            </a>
            <a href="https://www.behance.net/gallery/160703367/Coffee-Plus">
                <img className="rounded-xl" src={coffee} alt="img" />
            </a>
            <a href="https://www.figma.com/file/fsgwHp0U2mYsUZqbWY3MKA/Proyectos-Curso-React-Portafolio?node-id=0%3A1&t=qmMrzX3wAfo3sJjb-1">
                <img className="rounded-xl" src={movies} alt="img" />
            </a>
        </div>

        <div className="flex flex-col gap-4">
        <a href="https://www.figma.com/file/od6joy4qVrsfoMD777bvfT/E-commerce-Single-Item?node-id=0%3A1&t=fk6GLBFZB4zisB87-1">
                <img className="rounded-xl" src={corazon} alt="img" />
            </a>
            <a href="https://www.figma.com/file/13uPDOEy7ifaaAxo6qDliX/Cotline?node-id=0%3A1&t=kovQUi6NwYFORIME-1">
                <img className="rounded-xl" src={cotline} alt="img" />
            </a>
            <a href="https://www.figma.com/file/QZ1T6OtkGbCjaekX57iH9j/Crunch-Box?node-id=0%3A1&t=NjEpiyU5iihjNPFp-1">
                <img className="rounded-xl" src={crunchbox} alt="img" />
            </a>
            <a href="https://www.figma.com/file/B1M9HFpcT9cgQ5ZFtFf0iN/dentalcare?node-id=0%3A1&t=X71WwdocwysX6qwV-1">
                <img className="rounded-xl" src={dentalcare} alt="img" />
            </a>
            <a href="https://twitter.com/Ricardo79145379/status/1574611067904626688/photo/1">
                <img className="rounded-xl" src={flutter} alt="img" />
            </a>
            <a href="https://twitter.com/Ricardo79145379/status/1575936164611076096/photo/1">
                <img className="rounded-xl" src={game} alt="img" />
            </a>
            <a href="https://twitter.com/Ricardo79145379/status/1455976716099153920/photo/1">
                <img className="rounded-xl" src={mercadoLibre} alt="img" />
            </a>
        </div>

        <div className="flex flex-col gap-4">
        <a href="https://www.figma.com/file/XzucrUOio0roZW1FZqDDfg/Mundonas?node-id=0%3A1&t=c9VBy9TLrXRXI0W3-1">
                <img className="rounded-xl" src={mundonas} alt="img" />
            </a>
            <a href="https://www.figma.com/file/r20xLUCUy1GXAb09aKGrIx/YoContigo?node-id=213%3A2&t=uWL51qSNkH8RmlVw-1">
                <img className="rounded-xl" src={oakley} alt="img" />
            </a>
            <a href="https://www.figma.com/file/K0ZpnTniaZKoINvbDpDefg/AccionxClima?node-id=0%3A1&t=247nSlZvk4yzIXYC-1">
                <img className="rounded-xl" src={ods} alt="img" />
            </a>
            <a href="https://www.figma.com/file/5rVE2R4PvOxl9TVWs449yb/Settings?node-id=0%3A1&t=AogdMNzU47P9EAo3-1">
                <img className="rounded-xl" src={settings} alt="img" />
            </a>
            <a href="https://twitter.com/Ricardo79145379/status/1610073301820260357/photo/1">
                <img className="rounded-xl" src={sgv} alt="img" />
            </a>
            <a href="https://twitter.com/Ricardo79145379/status/1574163985888604160/photo/1">
                <img className="rounded-xl" src={travel} alt="img" />
            </a>
            <a href="https://www.behance.net/gallery/160425221/Turisticos-BiLine">
                <img className="rounded-xl" src={travelUni} alt="img" />
            </a>
            <a href="https://www.figma.com/file/JZGR24SO59sG6vkt7aTM1W/1%2B1?node-id=0%3A1&t=eAzhiyGgjxyMWhdD-1">
                <img className="rounded-xl" src={unomasuno} alt="img" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default AllDesigns;
