import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointments = ({ onSendAppointment, lastId}) => {

	const clearData = {
		parentName: "",
		childName: "",
		aptDate: "",
		aptTime: "",
		aptNotes: ""
	};

	let [toggleForm, setToggleForm] = useState(false);
	let [formData, setFormData] = useState(clearData);

	function formDataPublish() {
		const appointmentInfo = {
			id: lastId + 1,
			parentName: formData.parentName,
			childName: formData.childName,
			aptDate: formData.aptDate + " " + formData.aptTime,
			aptNotes: formData.aptNotes
		}
		onSendAppointment(appointmentInfo);
		setFormData(clearData);
		setToggleForm(!toggleForm);
	}

	function cancelForm() {
    setFormData(clearData);
    setToggleForm(!toggleForm);
  }

	return (
		<div>
		<button onClick={() => { setToggleForm(!toggleForm) }}
			className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`} >
		  <div><BiCalendarPlus className="inline-block align-text-top" />  Add Appointment</div>
		</button>
		{
			toggleForm &&
			<div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
			<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
				<label htmlFor="parentName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				Parent Name
				</label>
				<div className="mt-1 sm:mt-0 sm:col-span-2">
				<input type="text" name="parentName" id="parentName" placeholder="Enter full name..."
					onChange = { (e) => { setFormData({...formData, parentName: e.target.value}) } }
					value = { formData.parentName }
					className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
				<label htmlFor="childName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				Child Name
				</label>
				<div className="mt-1 sm:mt-0 sm:col-span-2">
				<input type="text" name="childName" id="childName" placeholder="Enter child's name..."
					onChange = { (e) => { setFormData({...formData, childName: e.target.value}) } }
					value = { formData.childName }
					className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
				<label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				Appointment Date
				</label>
				<div className="mt-1 sm:mt-0 sm:col-span-2">
				<input type="date" name="aptDate" id="aptDate"
					onChange = { (e) => { setFormData({...formData, aptDate: e.target.value}) } }
					value = { formData.aptDate }
					className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
				<label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				Appointment Time
				</label>
				<div className="mt-1 sm:mt-0 sm:col-span-2">
				<input type="time" name="aptTime" id="aptTime"
					onChange = { (e) => { setFormData({...formData, aptTime: e.target.value}) } }
					value = { formData.aptTime }
					className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
				<label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
				Appointment Notes
				</label>
				<div className="mt-1 sm:mt-0 sm:col-span-2">
				<textarea id="aptNotes" name="aptNotes" rows="3"
					onChange = { (e) => { setFormData({...formData, aptNotes: e.target.value}) } }
					value = { formData.aptNotes }
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Provide a brief description about your child's condition"></textarea>
				</div>
			</div>


			<div className="pt-5">
				<div className="flex justify-end">
				<button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
					Submit
				</button>
				<button
					type="button"
					onClick={cancelForm}
					className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
				>
					Cancel
				</button>
			</div>
			</div>
			</div>
		}
	  </div>
	)
}


export default AddAppointments
