import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin, Trophy, Users, Code, Zap, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIM%20ITC%20Logo-fHUwgMipeAg4E8xvaVMlv8UGMeQ1Rz.jpeg"
              alt="SIM IT Club Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-brand-black">
              SIM <span className="text-brand-red">IT</span> Club
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-primary">
              Schedule
            </Link>
            <Link href="#prizes" className="text-sm font-medium hover:text-primary">
              Prizes
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <Button size="sm" asChild>
            <Link href="https://forms.office.com/r/ZTYZrKLmP3">Register Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-pink/20 z-0" />
          <div className="container relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              SIM ITC <span className="text-brand-red">HackXperience</span> 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              24 hours of coding, innovation, and collaboration
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-brand-red" />
                <span>April 11-12, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-red" />
                <span>SIM Campus PAT Foyer</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 bg-brand-red hover:bg-brand-red/90" asChild>
                <Link href="https://forms.office.com/r/ZTYZrKLmP3">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-brand-red text-brand-red hover:bg-brand-red/10"
                asChild
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-brand-gray/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About The Hackathon</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                    <Code className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build & Innovate</h3>
                  <p className="text-muted-foreground">
                    Develop innovative solutions to real-world problems. Work with the latest technologies and showcase
                    your skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                    <Users className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Connect & Collaborate</h3>
                  <p className="text-muted-foreground">
                    Meet like-minded individuals, form teams, and collaborate with industry mentors to bring your ideas
                    to life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10">
                    <Zap className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Learn & Grow</h3>
                  <p className="text-muted-foreground">
                    Attend workshops, gain hands-on experience, and receive feedback from industry professionals to
                    enhance your skills.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Theme: "Loren Ipsum"</h3>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                This year's hackathon focuses on leveraging technology to loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Schedule</h2>
            <Tabs defaultValue="day1" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="day1">Day 1 (April 11)</TabsTrigger>
                <TabsTrigger value="day2">Day 2 (April 12)</TabsTrigger>
              </TabsList>
              <TabsContent value="day1" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">9:00 AM - 10:00 AM</h3>
                      <p className="text-lg font-semibold">Registration & Breakfast</p>
                      <p className="text-muted-foreground">Check-in and enjoy breakfast with fellow participants</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">10:00 AM - 11:00 AM</h3>
                      <p className="text-lg font-semibold">Opening Ceremony</p>
                      <p className="text-muted-foreground">
                        Welcome address, theme announcement, and rules explanation
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">11:00 AM - 12:00 PM</h3>
                      <p className="text-lg font-semibold">Team Formation</p>
                      <p className="text-muted-foreground">Find teammates and brainstorm project ideas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">12:00 PM - 1:00 PM</h3>
                      <p className="text-lg font-semibold">Lunch</p>
                      <p className="text-muted-foreground">Networking lunch with sponsors and mentors</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">1:00 PM - Midnight</h3>
                      <p className="text-lg font-semibold">Hacking Begins!</p>
                      <p className="text-muted-foreground">
                        Start working on your projects with periodic workshops and mentoring sessions
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="day2" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">12:00 AM - 12:00 PM</h3>
                      <p className="text-lg font-semibold">Hacking Continues</p>
                      <p className="text-muted-foreground">Continue working on your projects with mentor support</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">12:00 PM - 1:00 PM</h3>
                      <p className="text-lg font-semibold">Lunch</p>
                      <p className="text-muted-foreground">Final networking opportunity with sponsors</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">1:00 PM - 3:00 PM</h3>
                      <p className="text-lg font-semibold">Final Touches</p>
                      <p className="text-muted-foreground">Complete your projects and prepare presentations</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="h-full w-px bg-border mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-bold">3:00 PM - 5:00 PM</h3>
                      <p className="text-lg font-semibold">Project Presentations</p>
                      <p className="text-muted-foreground">Teams present their solutions to judges</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-red text-brand-red">
                        <Clock className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">5:00 PM - 6:00 PM</h3>
                      <p className="text-lg font-semibold">Closing Ceremony & Awards</p>
                      <p className="text-muted-foreground">Announcement of winners and prize distribution</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-16 md:py-24 bg-brand-gray/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Prizes & Rewards</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-brand-red relative overflow-hidden">
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-brand-red" />
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-1">$250</h3>
                  <p className="text-xl font-medium text-brand-red mb-4">DynamicWeb Track</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-brand-red relative overflow-hidden">
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-brand-red" />
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-1">$250</h3>
                  <p className="text-xl font-medium text-brand-red mb-4">Kitchen CoPilot Track</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-brand-red relative overflow-hidden">
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-brand-red" />
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-1">$75</h3>
                  <p className="text-xl font-medium text-brand-red mb-4">People's Choice</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                All participants will receive certificates, swags and merch, exclusive mentorship and networking, and
                LOTS OF FUN!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-medium">
                  <span>Who can participate?</span>
                  <ChevronDown className="h-5 w-5 text-brand-red" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  The hackathon is open to all SIM students, regardless of their major or programming experience. We
                  encourage students from diverse backgrounds to participate.
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-medium">
                  <span>Do I need to have a team?</span>
                  <ChevronDown className="h-5 w-5 text-brand-red" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  You can register individually or as a team of up to 5 members. We will help find teammates during the
                  team formation session.
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-medium">
                  <span>What should I bring?</span>
                  <ChevronDown className="h-5 w-5 text-brand-red" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Bring your laptop, charger, any hardware you might need for your project, and your student ID. We will
                  provide food, drinks, and a comfortable hacking space.
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-medium">
                  <span>Is there a registration fee?</span>
                  <ChevronDown className="h-5 w-5 text-brand-red" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  We want to make this event open to hackathon-enthusiasts like you! Participation is completely FREE
                  for all SIM students, thanks to our generous sponsors.
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <button className="flex w-full items-center justify-between font-medium">
                  <span>Will there be mentors available?</span>
                  <ChevronDown className="h-5 w-5 text-brand-red" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Yes, mentors will be available throughout the event to provide guidance and support to all teams.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-red text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hack?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us for 24 hours of coding, innovation, and fun. Register now to secure your spot!
            </p>
            <Button
              size="lg"
              className="px-8 bg-white text-brand-red hover:bg-brand-pink/90 hover:text-brand-red font-semibold transition-colors"
              asChild
            >
              <Link href="https://forms.office.com/r/ZTYZrKLmP3">Register Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIM%20ITC%20Logo-fHUwgMipeAg4E8xvaVMlv8UGMeQ1Rz.jpeg"
                alt="SIM IT Club Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-brand-black">
                SIM <span className="text-brand-red">IT</span> Club
              </span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 SIM IT Club. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-brand-red">
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-brand-red">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-brand-red">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

