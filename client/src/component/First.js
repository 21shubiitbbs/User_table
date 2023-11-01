import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField} from '../features/formSlice1';
import Input from './Input';
import Dropdown from './Dropdown';
import DateOfBirth from './DateOfBirth';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector((state) => state.form);

  const handleChange = (field, value) => {
    if (field === 'phoneNumber') {
      if (/^\d{0,10}$/.test(value)) {
        dispatch(updateField({ field, value }));
      }
    } else if (field === 'zip') {
      if (/^\d{0,6}$/.test(value)) {
        dispatch(updateField({ field, value }));
      }
    } else if (field === 'address') {
        dispatch(updateField({ field, value }));
    }else if (field === 'dayOfBirth' || field === 'monthOfBirth' || field === 'yearOfBirth') {
      dispatch(updateField({ field, value }));
    }
    else {
      if (/^[A-Za-z\s]*$/.test(value) || value === '') {
        dispatch(updateField({ field, value }));
      }
    } 
  };
const handleNextClick = (e) => {
  e.preventDefault();
  const mandatoryFields = ['title', 'firstName', 'lastName', 'phoneNumber'];
  const updatedErrors =mandatoryFields.reduce((errors, field) => {
    if (!form[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is mandatory`;
    } else {
      errors[field] = false;
    }
    return errors;
  }, { ...form.errors });

  dispatch(updateField({ field: 'errors', value: updatedErrors }));

  if (mandatoryFields.every(field => form[field])) {
    navigate('/second');
  }
};

  return (
    <>
      <Navbar/>
      <form onSubmit={handleNextClick} className='mx-auto px-32 m-10'>
        <div className="container gap-4 flex flex-row">
          <div className="flex-1">
          <label className="block text-black-700 text-base font-bold mb-4">Title <span style={{ color: 'red' }}> *</span></label> 
            <Dropdown
            value={form.title}
            options={["Select title", "Mr", "Miss"]}
            onChange={(e) => handleChange('title', e.target.value)}
            />
          {form.errors.title && <div style={{ color: 'red' }}>{form.errors.title}</div>}
          </div>
          <div>
          <label className="block text-black-700 text-base font-bold mb-4">First Name <span style={{ color: 'red' }}> *</span></label> 
          <Input
            value={form.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
          />
          {form.errors.firstName && <div style={{ color: 'red' }}>{form.errors.firstName}</div>}
          </div>
          <div>
          <label className="block text-black-700 text-base font-bold mb-4">Middle Name </label> 
          <Input
            value={form.middleName}
            onChange={(e) => handleChange('middleName', e.target.value)}
          />
          </div>
          <div>
          <label className="block text-black-700 text-base font-bold mb-4">Last Name <span style={{ color: 'red' }}> *</span></label> 
          <Input
            label="Last Name"
            value={form.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
          />
          {form.errors.lastName && <div style={{ color: 'red' }}>{form.errors.lastName}</div>}
          </div>
        </div>
        <div className="flex flex-col">        
          <label className="block text-black-700 text-base font-bold mb-4">Date of Birth <span style={{ color: 'red' }}> *</span></label>        
          <DateOfBirth
          day={form.dayOfBirth}
          month={form.monthOfBirth}
          year={form.yearOfBirth}
          onDayChange={(e) => handleChange('dayOfBirth', e.target.value)}
          onMonthChange={(e) => handleChange('monthOfBirth', e.target.value)}
          onYearChange={(e) => handleChange('yearOfBirth', e.target.value)}/>
        </div>
        <div className="mt-4 container gap-4 flex">
          <div className='flex-1'>
            <label className="text-base font-bold mb-4 block">Gender</label> 
            <Dropdown
            value={form.gender}
            options={["Select gender","Male", "Female"]}
            onChange={(e) => handleChange('gender', e.target.value)}
            />
          </div>
          <div className='flex-1 '>
          <label className="text-base font-bold mb-4 block">Phone Number<span style={{ color: 'red' }}> *</span></label> 
            <Input
            value={form.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
            {form.errors.phoneNumber && <div style={{ color: 'red' }}>{form.errors.phoneNumber}</div>}
          </div>
        </div>
        <div className="mt-4 container gap-4 flex">
          <div className='flex-1'>
          <label className="text-base font-bold mb-4 block">Address</label> 
            <Input
            value={form.address}
            onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
        </div>
        <div  class="form-text">Street address</div>
        <div className=' mt-4 container gap-4 flex flex-1'>
          <Input
            value={form.address2}
            onChange={(e) => handleChange('address2', e.target.value)}
          />
        </div>
        <div  class="form-text">Street address Line 2</div>
        <div className="mt-4 container gap-4 flex">
          <div className="w-full">
            <Input
            value={form.city}
            onChange={(e) => handleChange('city', e.target.value)}
            />
            <div className="form-text">City</div>
          </div>
          <div className="w-full">
            <Input
            value={form.state}
            onChange={(e) => handleChange('state', e.target.value)}
            />
            <div className="form-text">State</div>
          </div>
        </div>
        <div className='mt-4 container gap-4 flex'>
          <Input
            value={form.zip}
            onChange={(e) => handleChange('zip', e.target.value)}
          />
        </div>
        <div  class="form-text">Zip/Pincode</div>
        <div className="flex justify-end pt-14 my-6">
          <button className=" bg-black text-white font-semibold py-2 px-4 ">Next</button>
        </div>
      </form>
    </>
  );
};

export default FormComponent;
