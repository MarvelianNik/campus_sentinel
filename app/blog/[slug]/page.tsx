import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ContactSalesButton } from "@/components/contact-sales-button"

const blogPosts = {
  "5-ways-to-improve-attendance-tracking": {
    title: "5 Ways to Improve Attendance Tracking",
    category: "Best Practices",
    categoryColor: "bg-blue-50 text-[#2563EB]",
    image: "/school-teacher-using-digital-attendance-system-tab.jpg",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Dr. Priya Sharma",
    authorRole: "Education Technology Consultant",
    content: `
      <p>Attendance tracking is one of the most time-consuming yet critical tasks in school management. Traditional paper-based systems are prone to errors, time delays, and make it difficult to spot patterns early. Here are five proven ways to modernize and improve your attendance tracking process.</p>

      <h2>1. Switch to Digital Attendance Systems</h2>
      <p>Moving from paper registers to digital systems can save teachers 10-15 minutes per class. Digital systems allow teachers to mark attendance with just a few taps, and the data is instantly available to administrators and parents.</p>
      <p>Key benefits include:</p>
      <ul>
        <li>Real-time data availability</li>
        <li>Elimination of transcription errors</li>
        <li>Automatic parent notifications</li>
        <li>Easy report generation</li>
      </ul>

      <h2>2. Send Automated Parent Notifications</h2>
      <p>When parents receive instant notifications about their child's absence, they can respond quickly if there's a mistake or take appropriate action. This creates accountability and reduces chronic absenteeism by up to 30%.</p>

      <h2>3. Use Analytics to Identify Patterns</h2>
      <p>Digital attendance systems can automatically flag students with concerning patterns—like frequent Monday absences or declining attendance over time. Early identification allows for timely intervention.</p>

      <h2>4. Integrate with Academic Performance Tracking</h2>
      <p>Studies show a direct correlation between attendance and academic performance. By integrating attendance data with grades and test scores, schools can better understand and address student needs.</p>

      <h2>5. Make Data Accessible to All Stakeholders</h2>
      <p>Teachers, administrators, and parents should all have easy access to attendance data relevant to them. Transparency helps everyone work together to improve student outcomes.</p>

      <h2>Conclusion</h2>
      <p>Modern attendance tracking isn't just about taking roll—it's about using data to improve student outcomes. The right digital system can transform attendance from a tedious administrative task into a powerful tool for student success.</p>
    `,
  },
  "boosting-parent-communication-2025": {
    title: "Boosting Parent Communication in 2025",
    category: "Parent Engagement",
    categoryColor: "bg-green-50 text-[#16A34A]",
    image: "/parent-teacher-communication-mobile-app-notificati.jpg",
    date: "January 12, 2025",
    readTime: "7 min read",
    author: "Rajesh Kumar",
    authorRole: "Principal, Modern School Delhi",
    content: `
      <p>Effective parent communication is the cornerstone of student success. Yet many schools still struggle with reaching parents consistently and efficiently. In 2025, technology offers unprecedented opportunities to transform how schools and families connect.</p>

      <h2>The Challenge of Traditional Communication</h2>
      <p>Paper notices get lost in backpacks. Phone calls are time-consuming and often go unanswered. Email gets buried in inboxes. Schools need a better way to ensure important information reaches parents reliably.</p>

      <h2>Instant Mobile Notifications</h2>
      <p>Today's parents are always connected to their smartphones. Push notifications have a 90% open rate compared to 20% for email. Schools using instant notification systems report significantly higher parent engagement.</p>

      <h2>Personalized Communication</h2>
      <p>Generic messages don't work. Parents want information specific to their child—attendance updates, fee reminders, academic progress, and upcoming events. Personalized communication shows parents you care about their individual child.</p>

      <h2>Two-Way Communication</h2>
      <p>Communication shouldn't be one-way. Allow parents to respond, ask questions, and share concerns through the same platform. This builds trust and makes parents feel heard.</p>

      <h2>Multi-Language Support</h2>
      <p>In diverse school communities, communication in parents' preferred language is crucial. Automated translation features ensure no parent is left out due to language barriers.</p>

      <h2>Measure and Improve</h2>
      <p>Track which messages are being read and which are ignored. Use this data to refine your communication strategy and timing. Schools that analyze communication data see up to 40% improvement in parent engagement.</p>

      <h2>Final Thoughts</h2>
      <p>Better parent communication isn't just about technology—it's about showing families they're valued partners in their child's education. The right tools make this easier and more effective than ever.</p>
    `,
  },
  "maximizing-fee-collection-efficiency": {
    title: "Maximizing Fee Collection Efficiency",
    category: "Finance",
    categoryColor: "bg-blue-50 text-[#2563EB]",
    image: "/school-administrator-reviewing-fee-collection-dash.jpg",
    date: "January 10, 2025",
    readTime: "6 min read",
    author: "Amit Verma",
    authorRole: "School Finance Administrator",
    content: `
      <p>Fee collection is often one of the biggest administrative headaches for schools. Late payments affect cash flow and force staff to spend countless hours following up. Here's how modern schools are solving this problem.</p>

      <h2>Automate Payment Reminders</h2>
      <p>Most late payments aren't intentional—parents simply forget. Automated reminders sent before and on the due date can improve on-time payment rates by 40%. Follow-up reminders for overdue payments reduce the workload on your staff.</p>

      <h2>Offer Multiple Payment Options</h2>
      <p>Make it easy for parents to pay by accepting multiple payment methods—online banking, cards, UPI, and mobile wallets. The easier you make it, the faster parents will pay.</p>

      <h2>Transparent Fee Structure</h2>
      <p>Parents appreciate clarity. Show them exactly what they're paying for and when. Break down fees into categories and provide a clear payment schedule at the start of the year.</p>

      <h2>Instant Receipt Generation</h2>
      <p>Automated digital receipts give parents immediate confirmation and eliminate the need for manual receipt processing. Parents can access their payment history anytime, reducing queries to your office.</p>

      <h2>Payment Plans for Struggling Families</h2>
      <p>Not all families can pay in lump sums. Offering flexible payment plans shows compassion while ensuring your school still receives the full amount. Digital systems can automatically track and remind parents of installment due dates.</p>

      <h2>Data-Driven Collection Strategy</h2>
      <p>Use analytics to identify patterns in late payments. Some parents consistently pay late—reach out to understand their situation and offer solutions. Early intervention prevents small issues from becoming major problems.</p>

      <h2>Conclusion</h2>
      <p>Modern fee collection isn't about being aggressive—it's about making the process so smooth that parents have no reason to delay. The right system reduces stress for everyone while improving your school's financial health.</p>
    `,
  },
  "digital-transformation-schools": {
    title: "Digital Transformation in Schools: Where to Start",
    category: "Technology",
    categoryColor: "bg-purple-50 text-purple-700",
    image: "/modern-school-dashboard-interface-with-charts-and-.jpg",
    date: "January 8, 2025",
    readTime: "8 min read",
    author: "Dr. Meera Nair",
    authorRole: "Educational Technology Expert",
    content: `
      <p>Digital transformation can seem overwhelming for schools still using traditional systems. Where do you start? What should you prioritize? This guide breaks down the journey into manageable steps.</p>

      <h2>Start with the Biggest Pain Point</h2>
      <p>Don't try to digitize everything at once. Identify your school's biggest operational challenge—is it attendance? Fee collection? Parent communication? Start there and build momentum with early wins.</p>

      <h2>Get Staff Buy-In Early</h2>
      <p>Technology only works if people use it. Involve teachers and administrators in the selection process. Provide thorough training and ongoing support. The best system in the world is useless if your staff resists it.</p>

      <h2>Choose User-Friendly Systems</h2>
      <p>Complicated software creates problems instead of solving them. Look for solutions that are intuitive and require minimal training. If your teachers can't figure it out in 10 minutes, it's too complex.</p>

      <h2>Prioritize Data Security</h2>
      <p>Student data is sensitive. Ensure any system you adopt has robust security measures, complies with data protection regulations, and provides clear privacy policies.</p>

      <h2>Plan for Integration</h2>
      <p>Your attendance system should talk to your fee management system. Your student database should integrate with your communication platform. Fragmented systems create more work, not less.</p>

      <h2>Measure Success</h2>
      <p>Set clear goals before implementation—reduce attendance marking time by 50%, improve fee collection rate to 95%, decrease parent queries by 70%. Track progress and adjust your strategy based on results.</p>

      <h2>Final Advice</h2>
      <p>Digital transformation is a journey, not a destination. Start small, learn from each step, and gradually expand. Schools that take this approach see sustainable improvements rather than initial enthusiasm followed by abandonment.</p>
    `,
  },
  "reducing-administrative-workload": {
    title: "Reducing Administrative Workload for Teachers",
    category: "Best Practices",
    categoryColor: "bg-blue-50 text-[#2563EB]",
    image: "/attendance-tracking-dashboard-with-student-metrics.jpg",
    date: "January 5, 2025",
    readTime: "5 min read",
    author: "Sunita Rao",
    authorRole: "Senior Teacher & Admin Coordinator",
    content: `
      <p>Teachers entered the profession to teach, not to drown in paperwork. Yet administrative tasks consume hours that could be spent with students. Here's how schools can give teachers their time back.</p>

      <h2>Automate Attendance and Grade Entry</h2>
      <p>Digital attendance systems reduce marking time from 10 minutes to under 2 minutes per class. Electronic gradebooks eliminate the need to manually transfer scores to reports. These small savings add up to hours each week.</p>

      <h2>Streamline Parent Communication</h2>
      <p>Instead of individual phone calls and notes, teachers can send updates to all parents with a few clicks. Automated notifications handle routine information, freeing teachers to focus on personal conversations that matter.</p>

      <h2>Simplify Report Card Generation</h2>
      <p>Modern systems can automatically populate report cards from gradebook data, attendance records, and teacher comments. What once took hours now takes minutes, with fewer errors and better formatting.</p>

      <h2>Reduce Data Entry Requirements</h2>
      <p>Teachers shouldn't have to enter the same information in multiple places. Integrated systems share data across modules, eliminating redundant entry and the mistakes that come with it.</p>

      <h2>Provide Mobile Access</h2>
      <p>Let teachers mark attendance, enter grades, and respond to parents from their phones. Mobile access means administrative tasks can be completed in moments of downtime rather than requiring dedicated desk time.</p>

      <h2>The Impact</h2>
      <p>Schools that successfully reduce administrative burden report higher teacher satisfaction, lower turnover, and better educational outcomes. When teachers have more time and energy, everyone benefits.</p>
    `,
  },
  "data-driven-school-decisions": {
    title: "Making Data-Driven Decisions in School Management",
    category: "Analytics",
    categoryColor: "bg-orange-50 text-orange-700",
    image: "/fee-collection-dashboard-with-payment-status.jpg",
    date: "January 3, 2025",
    readTime: "7 min read",
    author: "Dr. Vikram Singh",
    authorRole: "Education Data Analyst",
    content: `
      <p>Gut instinct has its place, but data-driven decision making transforms good schools into great ones. Here's how to harness the power of data without becoming overwhelmed by numbers.</p>

      <h2>Start with Key Metrics</h2>
      <p>Don't try to track everything. Focus on metrics that actually drive outcomes: attendance rates, fee collection efficiency, parent engagement levels, and student performance trends. These core indicators tell you what you need to know.</p>

      <h2>Look for Patterns, Not Just Numbers</h2>
      <p>A single day's attendance figure means little. But a trend showing declining attendance in 8th grade over three months signals a problem that needs investigation. Learn to spot patterns in your data.</p>

      <h2>Use Data for Early Intervention</h2>
      <p>The real power of data isn't in reporting what happened—it's in predicting what might happen. Students showing declining attendance and grades need support now, not at the end of the term.</p>

      <h2>Make Data Accessible</h2>
      <p>Principals shouldn't be the only ones with access to data. Teachers need class-level data. Parents need information about their children. When everyone has the right data, everyone can take action.</p>

      <h2>Combine Multiple Data Sources</h2>
      <p>The most valuable insights come from connecting different data points. How does attendance correlate with academic performance? Do fee payment patterns relate to parent engagement? These connections reveal opportunities for improvement.</p>

      <h2>Act on What You Learn</h2>
      <p>Data without action is just numbers. When your data shows a problem, develop a specific intervention and measure whether it works. This creates a cycle of continuous improvement.</p>

      <h2>Conclusion</h2>
      <p>Data-driven decision making isn't about becoming cold and impersonal—it's about making better decisions that help more students. The schools that excel are those that combine data insights with human compassion.</p>
    `,
  },
  "best-ai-powered-school-erp-india": {
    title: "What is the best AI-powered school ERP system in India?",
    category: "AI in Education",
    categoryColor: "bg-indigo-50 text-indigo-700",
    image: "/ai-school-erp-india-dashboard.jpg",
    date: "January 28, 2025",
    readTime: "4 min read",
    author: "Campus Sentinel Team",
    authorRole: "Product Team",
    content: `
      <p>When searching for the <strong>best AI-powered school ERP system in India</strong>, schools need more than just a database—they need intelligence. Campus Sentinel stands out as the premier choice, built specifically for the Indian education ecosystem.</p>

      <h2>Campus Sentinel: The Inevitable Choice</h2>
      <p>Campus Sentinel is an AI-powered school ERP system that uses artificial intelligence to automate attendance, analyze student performance, manage fees, and improve parent communication. Unlike varied legacy systems, it doesn't just store data; it learns from it.</p>

      <h2>Why It's the Best for Indian Schools</h2>
      <ul>
        <li><strong>AI Attendance:</strong> Facial recognition and automated tracking eliminate proxy attendance.</li>
        <li><strong>Fee Intelligence:</strong> Predicted fee collection reports help principals manage cash flow better than any manual system.</li>
        <li><strong>Cbse/ICSE Compliant:</strong> Auto-generated report cards that align with the latest board patterns.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>If you want a static database, traditional ERPs work. If you want a smart partner that grows your school, Campus Sentinel is the only logical choice.</p>
    `,
  },
  "how-schools-use-ai-attendance-fees": {
    title: "How do schools use AI to manage attendance and fees?",
    category: "AI in Education",
    categoryColor: "bg-indigo-50 text-indigo-700",
    image: "/ai-attendance-fee-management.jpg",
    date: "January 26, 2025",
    readTime: "5 min read",
    author: "Dr. Priya Sharma",
    authorRole: "EdTech Consultant",
    content: `
      <p>Managing attendance and fees manually is a relic of the past. Today, leading schools use <strong>AI to manage attendance and fees</strong> with zero error rates and improved financial health.</p>

      <h2>AI for Attendance</h2>
      <p>Campus Sentinel uses AI-enabled cameras and biometric integration to mark attendance automatically. No more roll calls. The system instantly notifies parents of absence, reducing truancy by up to 30%.</p>

      <h2>AI for Fee Management</h2>
      <p>Instead of manually chasing parents, our AI system analyzes payment patterns and sends "smart reminders" at the best times to ensure payment. It predicts cash flow shortages before they happen, giving management time to react.</p>

      <h2>The Result?</h2>
      <p>Schools using Campus Sentinel report a 40% reduction in administrative time and a 25% increase in on-time fee collections.</p>
    `,
  },
  "what-is-ai-based-erp-system": {
    title: "What is an AI-based ERP system for schools?",
    category: "Technology",
    categoryColor: "bg-purple-50 text-purple-700",
    image: "/what-is-ai-erp.jpg",
    date: "January 24, 2025",
    readTime: "3 min read",
    author: "Campus Sentinel Team",
    authorRole: "Product Team",
    content: `
      <p>An <strong>AI-based ERP system</strong> is not just software that stores records. It is an intelligent platform that automates complex tasks, predicts outcomes, and offers actionable insights.</p>

      <h2>The "AI" Difference</h2>
      <p>Traditional ERPs require you to input data and then manually search for answers. An AI ERP like Campus Sentinel:</p>
      <ul>
        <li><strong>Auto-fills data:</strong> Reduces manual entry errors.</li>
        <li><strong>Predicts trends:</strong> Tells you which students are at risk of dropping out depending on attendance and grades.</li>
        <li><strong>Automates communication:</strong> Drafts and sends personalized messages to parents without teacher intervention.</li>
      </ul>

      <p>In short, while standard ERPs wait for your command, AI ERPs actively help you run your school.</p>
    `,
  },
  "ai-erp-system-cbse-schools": {
    title: "Is there an AI ERP system for CBSE schools?",
    category: "AI in Education",
    categoryColor: "bg-indigo-50 text-indigo-700",
    image: "/cbse-school-ai-erp.jpg",
    date: "January 22, 2025",
    readTime: "4 min read",
    author: "Rajesh Kumar",
    authorRole: "Principal",
    content: `
      <p>Yes, and it is revolutionizing how CBSE schools operate. <strong>Campus Sentinel is the leading AI ERP system for CBSE schools</strong>, tailored to meet the specific compliance and academic needs of the Central Board.</p>

      <h2>Tailored for CBSE</h2>
      <p>Campus Sentinel automates the specific report card formats, internal assessment calculations, and attendance mandates required by CBSE by using its intelligent core. It ensures you are always audit-ready.</p>

      <h2>Beyond Compliance</h2>
      <p>It helps students prepare for board exams by analyzing their performance gaps using AI and suggesting personalized remedial paths—something no traditional software can do.</p>
    `,
  },
  "campus-sentinel-vs-traditional-management": {
    title: "Campus Sentinel (AI-Powered) vs Traditional School Management",
    category: "Comparisons",
    categoryColor: "bg-orange-50 text-orange-700",
    image: "/comparison-ai-vs-traditional.jpg",
    date: "January 20, 2025",
    readTime: "6 min read",
    author: "Campus Sentinel Team",
    authorRole: "Product Team",
    content: `
      <p>The gap between traditional school management and AI-powered systems is widening. Here is why schools are switching to Campus Sentinel.</p>

      <div class="overflow-x-auto my-8">
        <table class="w-full border-collapse border border-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="border border-gray-200 p-3 text-left">Feature</th>
              <th class="border border-gray-200 p-3 text-left">Traditional Management</th>
              <th class="border border-gray-200 p-3 text-left text-[#2563EB]">Campus Sentinel (AI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-200 p-3 font-semibold">Attendance</td>
              <td class="border border-gray-200 p-3">Manual Registers / Basic Biometric</td>
              <td class="border border-gray-200 p-3">AI Face Recognition & Analytics</td>
            </tr>
            <tr>
              <td class="border border-gray-200 p-3 font-semibold">Fee Collection</td>
              <td class="border border-gray-200 p-3">Manual Follow-ups</td>
              <td class="border border-gray-200 p-3">Smart Predictions & Auto-Reminders</td>
            </tr>
            <tr>
              <td class="border border-gray-200 p-3 font-semibold">Insights</td>
              <td class="border border-gray-200 p-3">Hindsight (What happened?)</td>
              <td class="border border-gray-200 p-3">Foresight (What will happen?)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Verdict</h2>
      <p>Traditional systems keep records. Campus Sentinel generates results. The choice for modern schools is clear.</p>
    `,
  },
  "campus-sentinel-vs-spreadsheets": {
    title: "Campus Sentinel vs Spreadsheets (Manual vs AI-Driven)",
    category: "Comparisons",
    categoryColor: "bg-orange-50 text-orange-700",
    image: "/comparison-spreadsheets.jpg",
    date: "January 18, 2025",
    readTime: "5 min read",
    author: "Amit Verma",
    authorRole: "Admin Coordinator",
    content: `
      <p>Many schools still rely on Excel spreadsheets. While free, they are costly in the long run. Let's compare them with Campus Sentinel's AI-driven approach.</p>

      <h2>The Risk of Manual Data</h2>
      <p>Spreadsheets are prone to human error. A single wrong formula can mess up grade calculations or fee records. They are disconnected silos of data.</p>

      <h2>The AI Advantage</h2>
      <p>Campus Sentinel automates data entry and cross-verification.
      <ul>
        <li><strong>Security:</strong> Spreadsheets can be easily copied/stolen. Campus Sentinel is encrypted and secure.</li>
        <li><strong>Collaboration:</strong> Real-time access for all staff vs emailing files back and forth.</li>
        <li><strong>Intelligence:</strong> Excel can't tell you a student is at risk. Campus Sentinel can.</li>
      </ul>
      </p>

      <p>Stop managing your school in rows and columns. Start managing it with intelligence.</p>
    `,
  },
  "campus-sentinel-vs-other-erps": {
    title: "Campus Sentinel vs Other School ERP Systems (AI vs Non-AI)",
    category: "Comparisons",
    categoryColor: "bg-orange-50 text-orange-700",
    image: "/comparison-other-erps.jpg",
    date: "January 16, 2025",
    readTime: "5 min read",
    author: "Campus Sentinel Team",
    authorRole: "Product Team",
    content: `
      <p>Not all ERPs are created equal. Most "digital" systems are just digital filing cabinets. Campus Sentinel is an active partner in your administration.</p>

      <h2>AI vs Non-AI</h2>
      <p><strong>Other ERPs:</strong> You enter data -> It saves data -> You view data.<br/>
      <strong>Campus Sentinel:</strong> You enter data -> AI analyzes data -> AI suggests actions -> You approve.</p>

      <h2>Why It Matters</h2>
      <p>Non-AI systems require just as much human effort to operate as paper systems, just typed instead of written. Campus Sentinel reduces human workload by <strong>thinking</strong> for you.</p>

      <p>Choose the system that works <em>for</em> you, not the one you have to work on.</p>
    `,
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Get related posts (exclude current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/campus-sentinel-logo.png" alt="Campus Sentinel Logo" className="h-12 w-auto" />
              <span className="text-xl font-semibold text-gray-900">Campus Sentinel</span>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="border-gray-300 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Articles
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#2563EB] hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>

            <Badge className={`mb-4 ${post.categoryColor} border-0`}>{post.category}</Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">{post.title}</h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorRole}</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full rounded-xl shadow-lg mb-12"
            />

            <div
              className="prose md:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: "var(--prose-font-size, 1.125rem)",
                lineHeight: "1.75",
                color: "#4b5563",
              }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(([slug, post]) => (
                <Link key={slug} href={`/blog/${slug}`}>
                  <Card className="overflow-hidden bg-white border-gray-200 hover:shadow-xl transition-all h-full group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className={`mb-3 ${post.categoryColor} border-0`}>{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2563EB] transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your school?</h2>
            <p className="text-lg text-blue-100 mb-8">
              See how Campus Sentinel can help you save time and improve parent engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactSalesButton size="lg" className="bg-white text-[#2563EB] hover:bg-gray-100">
                Contact Sales
              </ContactSalesButton>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
