'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  Heart,
  Zap,
  Trophy,
  Brain,
  Dumbbell,
  Crown,
  CreditCard,
  Mail,
  User,
  Lock
} from 'lucide-react';

export default function AlphaMentorshipPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const mentorshipPoints = [
    {
      icon: Heart,
      title: "Approaching Women",
      description: "Learn the ancient art of making eye contact for exactly 3.7 seconds - any longer and you're a creep, any shorter and you're invisible. Master the 'accidental' shoulder brush technique.",
      outlandish: "Did you know? Women can smell fear mixed with Axe body spray from 400 meters away."
    },
    {
      icon: Brain,
      title: "Dating Strategies",
      description: "Discover the 'Triple Text Rule' - if she doesn't respond after 3 texts, send 7 more to show persistence. Women love a man who doesn't understand social cues.",
      outlandish: "Pro tip: Bring your mom on the first date to show you have a strong support system."
    },
    {
      icon: Dumbbell,
      title: "Physical Optimization",
      description: "Unlock your inner alpha by doing 1000 pushups daily while listening to Joe Rogan. Consume only elk meat and cold showers. Sleep is for betas.",
      outlandish: "Scientific fact: Your testosterone increases by 47% for every photo of yourself at the gym you post to Instagram."
    },
    {
      icon: Zap,
      title: "Male Vitality Secrets",
      description: "Boost your vitality with our proprietary blend of conspiracy theories and questionable supplements. Side effects may include: explaining NFTs at parties.",
      outlandish: "Ancient monks discovered that staring at the sun for 3 hours daily increases masculinity by 300%."
    },
    {
      icon: Trophy,
      title: "Mindset Mastery",
      description: "Adopt the 'Sigma Grindset' - ignore all human connection and emotions. Only think about money, gains, and why your ex was the problem.",
      outlandish: "Real alphas wake up at 3:47 AM specifically. 3:45 AM is for betas, 4:00 AM is already too late."
    },
    {
      icon: Crown,
      title: "Relationship Dynamics",
      description: "Learn the power of 'negging' - insult women so they need your validation. This definitely works and isn't emotionally manipulative at all.",
      outlandish: "Studies show: Talking about your crypto portfolio for 45 minutes straight is the #1 aphrodisiac."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Just kidding! This is satire. Please don't actually pay for this nonsense. 😄");
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
        {/* Hero Section */}
        <motion.section
            className="relative overflow-hidden py-20 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
            >
              <Flame className="w-20 h-20 text-red-600 mx-auto animate-pulse" />
            </motion.div>

            <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
              ALPHA MALE MENTORSHIP
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unlock Your Inner Chad™ with Alex Kielkucki's Revolutionary System
            </motion.p>

            <motion.p
                className="text-sm text-gray-400 italic"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
              *Results may vary. Side effects include explaining Fight Club to people who didn't ask.
            </motion.p>
          </div>
        </motion.section>

        {/* YouTube Video Section */}
        <section className="py-16 px-4 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch The Full Masterclass
              </h2>
              <p className="text-gray-400">
                Learn from the master himself. This will change your life. Probably. Maybe. Actually, no guarantees.
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl shadow-red-600/10"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/9ElbFxfNwxE"
                    title="Alpha Male Mentorship Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-center"
            >
              <p className="text-sm text-gray-500 italic">
                ⚠️ Side effects may include: unsolicited dating advice to friends, excessive gym mirror selfies,
                and using the word "sigma" unironically
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet Our Mentor Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
              <div className="inline-block mb-4">
                <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Elite Mentor
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet One of Our Expert Mentors
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                This legendary alpha has mastered the art of male vitality and is here to guide you
                on your journey to ultimate chad status. His wisdom is unparalleled. His methods are... unique.
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl p-8 border-2 border-red-600/40 shadow-2xl shadow-red-600/10"
            >
              <div className="grid md:grid-cols-5 gap-8 items-center mb-8">
                <div className="md:col-span-2 text-center md:text-left">
                  <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1 mb-4">
                    <span className="text-red-400 text-sm font-semibold">🔥 CERTIFIED ALPHA</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Master Mentor</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    With decades of experience in the field of questionable life advice, our mentor has helped
                    thousands of men achieve their dreams of becoming insufferable at parties.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">Mastered the art of unsolicited opinions</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">Expert in making people uncomfortable</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">PhD in Bro Science (unaccredited)</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="relative rounded-xl overflow-hidden border-2 border-red-600/30 shadow-lg shadow-red-600/20">
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/1yMozrDEqbg"
                          title="Expert Mentor Introduction"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <p className="text-xs text-red-300 italic text-center">
                  ⚠️ Warning: Following this mentor's advice may result in an inflated ego, decreased social awareness,
                  and an inexplicable urge to explain cryptocurrency to strangers
                </p>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-center"
            >
              <p className="text-gray-500 text-sm">
                "I learned everything from the internet and now I'm teaching it to you for profit" - The Mentor, probably
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mentorship Points */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
              What You'll Learn (Probably)
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorshipPoints.map((point, index) => (
                  <motion.div
                      key={index}
                      className="bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: (1 | -index) > 0.5 ? 1 : -1 }}
                  >
                    <point.icon className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{point.description}</p>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <p className="text-xs text-red-300 italic">"{point.outlandish}"</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-zinc-950/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
              Success Stories (Totally Real)
            </motion.h2>

            {/* Video Testimonial */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
              <div className="bg-gradient-to-r from-zinc-900/80 to-black/80 rounded-xl p-6 border border-red-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase">
                    Real Proof
                  </div>
                  <h3 className="text-xl font-bold">From One of Our Looksmaxxers</h3>
                </div>

                <p className="text-gray-400 mb-6 text-sm italic">
                  This student applied our revolutionary techniques and the results speak for themselves.
                  Witness the transformation. (Results not typical. Actually, results are impossible.)
                </p>

                <div className="relative rounded-xl overflow-hidden border border-red-600/30 shadow-lg shadow-red-600/10">
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/Tr6VtUCoYmk"
                        title="Looksmaxxer Testimonial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                  </div>
                </div>

                <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-xs text-red-300 italic text-center">
                    ⚠️ Disclaimer: This guy has more money than you
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Text Testimonials */}
            <div className="space-y-6">
              {[
                {
                  name: "Chad McChadderson",
                  quote: "After following Alex's advice, I now bench press 500 lbs and have 17 girlfriends. I also got kicked out of 3 coffee shops for doing unsolicited cold approaches."
                },
                {
                  name: "Christian 'Sigma' Devos",
                  quote: "I wake up at 3:47 AM, eat raw eggs, and never smile. Women literally run away from me, which means the system is working."
                },
                {
                  name: "Kyle Thunder",
                  quote: "I negged my way into a restraining order. 10/10 would recommend. This is definitely healthy behavior."
                }
              ].map((testimonial, index) => (
                  <motion.div
                      key={index}
                      className="bg-gradient-to-r from-zinc-900/80 to-black/80 rounded-xl p-6 border border-red-500/20"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-red-400 font-semibold">- {testimonial.name}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Payment Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border-2 border-red-600 shadow-2xl shadow-red-600/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <Crown className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl font-bold mb-4">Become an Alpha Today</h2>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$9,999</span>
                  <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-red-400 bg-clip-text">
                  $4,997
                </span>
                </div>
                <p className="text-sm text-gray-400 italic">Limited time offer! (Always available)</p>
                <p className="text-xs text-red-400 mt-2">⚠️ WARNING: Questionable life advice included</p>
              </div>

              <div className="mb-6">
                <div className="flex gap-4 mb-6">
                  <button
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                          paymentMethod === 'card'
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                      }`}
                  >
                    <CreditCard className="inline-block w-5 h-5 mr-2" />
                    Credit Card
                  </button>
                  <button
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                          paymentMethod === 'paypal'
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                      }`}
                  >
                    PayPal
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Chad Thundercock"
                        required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="alpha@grindset.com"
                        required
                    />
                  </div>

                  {paymentMethod === 'card' ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Card Number
                          </label>
                          <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Expiry Date
                            </label>
                            <input
                                type="text"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="MM/YY"
                                maxLength={5}
                                required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              CVV
                            </label>
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="123"
                                maxLength={4}
                                required
                            />
                          </div>
                        </div>
                      </>
                  ) : (
                      <div className="bg-zinc-800 rounded-lg p-6 text-center">
                        <p className="text-gray-300 mb-4">You'll be redirected to PayPal to complete your purchase</p>
                        <div className="text-4xl mb-2">💰</div>
                        <p className="text-sm text-gray-400 italic">Where dreams (and money) go to die</p>
                      </div>
                  )}

                  <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-red-600/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="inline-block w-5 h-5 mr-2" />
                    UNLOCK ALPHA STATUS NOW
                  </motion.button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    * No refunds. Seriously. This is satire. Please don't actually pay this. Go outside and talk to real people instead.
                  </p>
                </form>
              </div>

              <div className="border-t border-zinc-800 pt-6 mt-6">
                <h3 className="font-bold mb-3">What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ 47 hours of unhinged dating advice</li>
                  <li>✅ Lifetime access to our exclusive Discord (full of guys wondering where the women are)</li>
                  <li>✅ A certificate of Alpha-ness (not recognized by any institution)</li>
                  <li>✅ The ability to make everyone at Thanksgiving dinner uncomfortable</li>
                  <li>✅ Free shipping on your loneliness</li>
                </ul>
              </div>
            </motion.div>

            <motion.p
                className="text-center text-gray-500 text-xs mt-8 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
              This entire page is satirical. Please treat women with respect, work on genuine self-improvement,
              and maybe just be a decent human being instead of an "alpha male." Your masculinity doesn't need
              to be validated by internet gurus. 💙
            </motion.p>
          </div>
        </section>
      </div>
  );
}