import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';

type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  cottage: string;
  specialRequests: string;
};

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-cream min-h-screen py-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg mx-auto"
        >
          <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-forest" />
          </div>
          <h2 className="text-4xl font-serif text-forest mb-4">Request Received!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for choosing Green Leaf Farm. We've received your booking request and will contact you shortly to confirm your reservation.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-earth hover:bg-earth-light text-cream px-8 py-3 rounded-full font-medium transition-colors"
          >
            Book Another Stay
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-forest mb-6"
          >
            Book Your Stay
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Reserve your eco-friendly cottage and start planning your farm getaway.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-2xl font-serif text-forest mb-6 border-b border-gray-100 pb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                      placeholder="Jane"
                    />
                  </div>
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                      placeholder="Doe"
                    />
                  </div>
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                      placeholder="jane@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Stay Details */}
            <div>
              <h3 className="text-2xl font-serif text-forest mb-6 border-b border-gray-100 pb-4">Stay Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      {...register("checkIn", { required: "Check-in date is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                    />
                  </div>
                  {errors.checkIn && <p className="mt-1 text-sm text-red-600">{errors.checkIn.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      {...register("checkOut", { required: "Check-out date is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                    />
                  </div>
                  {errors.checkOut && <p className="mt-1 text-sm text-red-600">{errors.checkOut.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      {...register("guests", { required: "Number of guests is required" })}
                      className="pl-10 w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest appearance-none"
                    >
                      <option value="">Select guests</option>
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  {errors.guests && <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Cottage</label>
                  <select
                    {...register("cottage", { required: "Please select a cottage" })}
                    className="w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest appearance-none"
                  >
                    <option value="">Select a cottage</option>
                    <option value="willow">The Willow Suite (2 Guests)</option>
                    <option value="garden">Garden View Cabin (4 Guests)</option>
                    <option value="orchard">The Orchard House (6 Guests)</option>
                  </select>
                  {errors.cottage && <p className="mt-1 text-sm text-red-600">{errors.cottage.message}</p>}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
              <textarea
                {...register("specialRequests")}
                rows={4}
                className="w-full rounded-xl border-gray-300 bg-gray-50 py-3 px-4 focus:ring-forest focus:border-forest"
                placeholder="Any dietary requirements, arrival time, or special occasions?"
              ></textarea>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-forest hover:bg-forest-light text-cream py-4 rounded-xl font-medium text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Request Booking
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                This is a request only. We will contact you to confirm availability and process payment.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
