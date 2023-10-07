import { useState, useRef } from "react";
import ClientDetails from "../../components/factures/ClientDetails";
import Dates from "../../components/factures/Dates";
import Footer from "../../components/factures/Footer";
import MainDetails from "../../components/factures/MainDetails";
import Notes from "../../components/factures/Notes";
import Table from "../../components/factures/Table";
import TableForm from "../../components/factures/TableForm";
import { useReactToPrint } from "react-to-print";
import Table1 from "../../components/factures/table1";
import AYAM1 from '../../assets/AYAM1.png';


function Facture() {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [code,setCode] = useState("")
    const [entreprise,setEntreprise] = useState("")
    const [clientName,setClientName] = useState("")
    const [clientAddress,setClientAddress] = useState("")
    const [invoiceNumber,setInvoiceNumber] = useState("")
    const [invoiceDate,setInvoiceDate] = useState("")
    const [dueDate,setDueDate] = useState("")
    const [notes,setNotes] = useState("")
    const [description,setDescription] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [amount,setAmount] = useState("")
    const [list,setList] = useState([])
    const [somme, setSomme] = useState(0)
    const [vat20, setVat20] = useState("")
    const [Avance,setAvance] = useState(0)
    const [vatAmount, setVatAmount] = useState(0);
    

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    const[isToggled,setIsToggled]=useState(false)


    return(
        <>
        <main className="m-3 p-2 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow row print-container">
        <button className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300" onClick={handlePrint}>   
            Télécharger/Imprimer
        </button>
            { showInvoice ? (
                <>
            <div ref={componentRef}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {/* Logo à gauche */}
      <div className="mr-4">
        <img src={AYAM1} style={{ width: '200px', height: '200px' }} alt="Logo de l'entreprise" />
      </div>
      {/* Informations de l'entreprise à droite */}
      <div className="text-right">
        <h2 className="font-bold tracking-wide text-6xl mb-0.5 text-red-500">Sté <span className="text-black">AYAM</span> FER</h2>
        <h4 className="font-bold tracking-wide text-xs mb-0.5 text-red-500">Vente de Matériaux de Construction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br /> ACIER - GRAVETTE - BITUMES - BOIS COFFRAGE - CIMENT - SABLE - FEUTRES - POLYSTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
      </div>
    </div>
    <hr className="my-2 border-gray-400" />
            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} clientName={clientName} clientAddress={clientAddress} code={code} />
            <hr className="my-2 border-gray-400" />
            <Table description={description} price={price} quantity={quantity} amount={amount} list={list} setList={setList} somme={somme} setSomme={setSomme} vatAmount={vatAmount} setVatAmount={setVatAmount} vat20={vat20} setVat20={setVat20} Avance={Avance} setAvance={setAvance}/>
            <hr className="my-2 border-gray-400" />
            <div>
            <button className="text-xl font-bold font-normal text-white" onClick={()=>setIsToggled(!isToggled)}>TVA</button>
            {isToggled && <Table1 somme={somme}/>}
            </div>
            <div>
            <div className="w-1/2 border border-red-300 p-1 rounded-lg float-center">
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Avance : &nbsp;&nbsp;&nbsp;&nbsp;{Avance.toLocaleString()}Dh</span>
      </div>
      <div className="mb-1">
        <span className="block border border-red-300 p-2 rounded-lg text-black">Total HT:&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">{somme.toLocaleString()}Dh</span> </span> 
      </div>
    </div>
            </div>
            <div>
                <h2 className="flex items-end justify-end text-2xl font-bold font-normal text-bleu">Réglement:espéce&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
            </div>
            <Notes notes={notes}/>
            <div>
              <hr></hr>
              <h8 className="text-xl font-normal font-normal text-blue-500">RC / 202257 - Patente: 37993681 - I.F: 4120515 - C.N.S.S: 7041643 - ICE:001510901000090 - B.Poste: 1722-Riad Arrida 68 Marina Centre 1 Etage 05 Ang BD Zerktouni et Mohammed Ben Abdellah - Casablanca ...</h8>
            </div>
            <div>
            <h8 className="text-xl font-normal font-normal text-blue-500">Tél : 05.35.43.93.22 / 05.35.53.77.67 - Fax : 05.35.55.25.15 - GSM : 06.61.83.65.23/33 </h8>
            </div>
            <div>
            <h8 className="text-xl font-normal font-normal text-blue-500">Email : ayamfer@gmail.com </h8>
            </div>
            <hr></hr>
            </div>
            <button onClick={()=> setShowInvoice(false)} className="bg-blue-500 text-white font-normal py-0.2 px-0.2 rounded shodow border-0.5 border-blue-200 hover:bg-trasparent hover:text-blue-200 transition-all duration-300">
               Modifier les informations
            </button>
            </>
            ):(
                <>
                <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="address">Entreprise: </label>
                <input type="text"
                       name="text"
                       id="entreprise"
                       placeholder=""
                       autoComplete="off" 
                       value={entreprise}
                       onChange={(e)=>setEntreprise(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="name">Entrer votre nom:</label>
                <input type="text"
                       name="text"
                       id="name"
                       placeholder=""
                       autoComplete="off" 
                       value={name}
                       onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="address">Entrer votre adresse: </label>
                <input type="text"
                       name="text"
                       id="address"
                       placeholder=""
                       autoComplete="off" 
                       value={address}
                       onChange={(e)=>setAddress(e.target.value)}
                />
                </div>
                </article>
                <article className="md:grid grid-cols-2 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="email">Entrer adresse mail:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone">Enter le numéro de télephone:</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder=""
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                </article>
                <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                <label htmlFor="clientName">Entrez le nom de votre client:</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder=""
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez l'adresse de votre client:
                </label>
                <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder=""
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="clientAddress">
                     Entrez le code du client:
                </label>
                <input
                    type="text"
                    name="code"
                    id="code"
                    placeholder=""
                    autoComplete="off"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                </div>
                </article>
               <article className="md:grid grid-cols-3 gap-10 ">
               <div className="flex flex-col" >
               <label htmlFor="invoiceNumber">Numéro de facture</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                />
               </div>
                <div className="flex flex-col">
                <label htmlFor="invoiceDate">Date de facturation</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder=""
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="dueDate">Date d'échéance</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder=""
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                </div>
      
               </article>


               <article>
                <TableForm description={description} 
                           setDescription={setDescription}
                           
                           quantity={quantity} 
                           setQuantity={setQuantity}
                           
                           price={price} 
                           setPrice={setPrice}
                           
                           amount={amount} 
                           setAmount={setAmount}
                           
                           list={list}
                           setList={setList}

                           somme={somme} 
                           setSomme={setSomme}

                           vat20={vat20}
                           setVat20={setVat20}

                           Avance={Avance}
                           setAvance={setAvance}
                           />                           
                </article> 

                <label htmlFor="notes">Notes complémentaires</label>
                 <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                ></textarea>

                <button onClick={()=>setShowInvoice(true)} 
                className="bg-blue-500 text-white font-bold py-0.4 px-0.2 rounded shodow border-2 border-blue-500 hover:bg-trasparent hover:text-blue-300 transition-all duration-300">
                Aperçu de la facture</button>
                </div>
                </>
            )
            }
        </main>
        </>
    );
}
export default Facture;