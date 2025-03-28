import fbIcon from "/icon-facebook.svg"
import IgIcon from "/icon-instagram.svg"
import TTIcon from "/icon-twitter.svg"
import WhatsappIcon from "/whatsapp.svg"
import phoneIcon from "/phone-icon.svg"
import socialIcon from "/social-media-icon.svg"
import mailIcon from "/mail-icon.svg"
import locationIcon from "/location-icon.svg"
import { useState } from "react"

const CustomOrder = () => {

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            setMessage('');

            fetch('https://innjoy-signup-production.up.railway.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to send message');
                    }
                    return response.json();
                })
                .then((data) => {
                    setMessage(data.message);
                    setIsSubmitting(false);
                    setFormData({ name: '', message: '' }); // Reset form data after submission
                    navigate("/success-page", { state: { message: 'Message Sent Successfully'} })
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('There was an error sending your message. Please try again later.');
                    setIsSubmitting(false);
                });
        } else {
            setErrors(formErrors);
        }
    };



  return (
        <div >
          <form className="bg-[#36B864]  p-4 rounded-4xl relative text-white" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-white leading-tight">Custom Order</h2>
            <p className="mb-2 text-sm text-[#ece9e9]">Savor your flavours, customize your cravings</p>
            {/* Form fields */}
            <div className=" flex flex-col gap-2">
                {/* Name field */}
                <div className="">
                    <label className="mr-[9px] block" htmlFor="name">Name</label>
                    <input className="outline-none w-full  p-2 rounded-4xl border border-[#f0ecec] text-[#ecdfdf] shadow-lg" name="name" id="name" type="text" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div >
                    <label className="mr-[9px] block " htmlFor="product">Product</label>
                    <select className="outline-none w-full  p-2 rounded-4xl border border-[#f0ecec] text-[#ecdfdf] shadow-lg"  name="product" id="product">
                      <option value="">Choose a Product</option>
                      {['Peanott Milk', 'Peanott Butter', 'Coated Peanut'].map( (item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                {/* Message field */}
                <div >
                    <label className="mr-[9px] block " htmlFor="message">Order Instructions</label>
                    <textarea className="outline-none w-full  p-2 rounded-4xl border border-[#f0ecec] text-[#ecdfdf] shadow-lg" cols="30" rows="2" name="message" id="message" value={formData.message} onChange={handleChange} ></textarea>
                </div>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button className="py-[9px] px-[18px] block rounded-4xl bg-[white] hover:bg-[#111D15] text-black w-full mt-4 shadow-lg" type="submit" disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
  )
}

export default CustomOrder;
