const questionBank = [

/* =======================
   PREGUNTAS 1–10
   ======================= */

{
question:"What is one distinguishing feature of HPE Aruba Networking wireless solutions?",
options:[
"They protect IoT devices by automatically installing an agent on each device to encrypt communications.",
"They automatically recognize when client applications need special handling and optimize performance for those clients.",
"They can operate seamlessly on HPE Aruba Networking private 5G.",
"They are all ruggedized for outdoor environments, giving customers more flexibility in where they are deployed."
],
correct:1, topic:"Wireless"
},

{
question:"You suspect that HPE Aruba Networking Central might resonate with a customer. What is one good way to open the conversation?",
options:[
"Point out the differences between HPE Aruba Networking's and other vendor's management approach.",
"Ask about how much visibility the customer currently has into the network.",
"Assess how well the customer understands the wireless technologies currently in use.",
"Access an HPE Aruba Networking AP Web UI and demonstrate configuring a wireless LAN (WLAN)."
],
correct:1, topic:"Aruba Central"
},

{
question:"An IT decision-maker wants to automate troubleshooting processes and ensure the network is optimized. Based on these requirements, which feature should you emphasize?",
options:[
"HPE Aruba Networking Network Insight",
"HPE Aruba Networking ClearPass Policy Manager",
"HPE Aruba Networking Fabric Composer",
"HPE Aruba Networking Dynamic Segmentation"
],
correct:0, topic:"Aruba Central"
},

{
question:"What is one benefit of HPE Aruba Networking Central for network administrators?",
options:[
"It helps them develop simple location-based services based on open-source tools and APIs.",
"It helps them proactively find and resolve performance problems.",
"It helps them establish unified network management for a network that includes HPE Aruba Networking and third-party network infrastructure devices.",
"It helps them monitor and predict their monthly bill for HPE GreenLake for HPE Aruba Networking."
],
correct:1, topic:"Aruba Central"
},

{
question:"Which characteristic indicates a good opportunity for an HPE GreenLake for Networking solution?",
options:[
"Preferring to use network equipment beyond typical refresh cycles.",
"Being focused on budget and price-per-unit.",
"Reducing operational risk.",
"Preferring in-house support and maintenance."
],
correct:2, topic:"GreenLake"
},

{
question:"How does the distributed data center architecture improve security?",
options:[
"Establishes secure communications between remote workers and the network.",
"Uses a centralized security appliance to segment the network and enforce security policies for each segment.",
"Protects the data center by tunneling all traffic between branch offices and the data center.",
"Uses ToR switches that include a stateful firewall to filter all the traffic in the data center."
],
correct:3, topic:"Data Center"
},

{
question:"Which business outcome is a high priority for most Chief Information Security Officers (CISO)?",
options:[
"Allowing network admins to use their preferred security monitoring tools.",
"Improving operational continuity by minimizing risks and attack surfaces.",
"Ensuring that employees can only access resources from within the corporate campus.",
"Planning network security so that they can assume no breach will ever occur."
],
correct:1, topic:"Security"
},

{
question:"What distinguishes HPE Aruba Networking EdgeConnect SD-WAN from HPE Aruba Networking EdgeConnect SD-Branch?",
options:[
"HPE Aruba Networking EdgeConnect SD-WAN embeds support for remote workers while HPE Aruba Networking EdgeConnect SD-Branch does not.",
"HPE Aruba Networking EdgeConnect SD-WAN integrates more fully with HPE Aruba Networking wired and mobility solutions.",
"HPE Aruba Networking EdgeConnect SD-WAN supports LTE while HPE Aruba Networking SD-Branch does not.",
"HPE Aruba Networking EdgeConnect SD-WAN is the lead solution, offering the most advanced AI-optimized SD-WAN features."
],
correct:3, topic:"SD-WAN"
},

{
question:"What topic would uncover whether or not a customer could have a use case for an HPE Aruba Networking zero trust security?",
options:[
"The customer's processes for ensuring regulatory compliance.",
"The reasons that internal users and devices are more trusted than external ones.",
"The customer's requirements for encrypting data at rest on servers.",
"How much the decision maker understands about technologies such as IPsec."
],
correct:1, topic:"Security"
},

{
question:"You are proposing HPE Aruba Networking APs and switches, managed by HPE Aruba Networking Central. You discovered that the customer already has a Security Information and Event Management (SIEM) system. What should you explain about HPE Aruba Networking Central?",
options:[
"It will replace the SIEM system, saving the customer money.",
"It can share valuable telemetry with the SIEM system, enhancing visibility.",
"It will use data from the SIEM system to push the correct location-based policies to network infrastructure.",
"It will use data from the SIEM system to help manage the HPE Aruba Networking inventory."
],
correct:1, topic:"Aruba Central"
},

/* =======================
   PREGUNTAS 11–20
   ======================= */

{
question:"A senior IT manager tells you that she wants network admins to spend less time troubleshooting issues so they have more time to focus on new initiatives. How can HPE Aruba Networking deliver the senior IT manager's desired outcome?",
options:[
"HPE Aruba Networking APs and switches rely on the Network Analytics Engine (NAE) to automate the onboarding of devices.",
"HPE Aruba Networking Central with AI for Networking accelerates IT troubleshooting by providing ML-based, real-time insights, and recommendations.",
"HPE Aruba Networking ClearPass monitors network devices' performance and automatically notifies IT admins of performance issues.",
"HPE Aruba User Experience Insight (UXI) helps IT determine why data center applications are not performing as well as they should."
],
correct:1, topic:"Aruba Central"
},

{
question:"What is one way that HPE Aruba Networking solutions close security gaps?",
options:[
"They offload security filtering and access control to endpoints by deploying HPE Aruba Networking agents to them.",
"They implement a strict traffic flow in which traffic always flows from the edge to gateways and firewall in the data center and then to its destination.",
"They automate the deployment of predefined policies, which assign access rights based on users’ and devices’ location.",
"They make it easier for customers to define and apply consistent policies that follow users wherever they go."
],
correct:3, topic:"Security"
},

{
question:"What is one issue IoT devices create for network admins?",
options:[
"Network admins often find it difficult to identify IoT devices and apply appropriate access policies to them.",
"IoT devices do not support the same wireless technologies as users’ mobile devices, requiring the deployment of two separate networks.",
"Whenever wireless IoT devices move around the network, network admins must adjust the network architecture to accommodate them.",
"IoT devices require network admins to manually join them to the network every time they reboot."
],
correct:0, topic:"Security"
},

{
question:"What is one disadvantage of using a centralized data center architecture?",
options:[
"It makes the network more complex because IT must configure switches to forward traffic to a security appliance.",
"It increases costs because organizations must install a security appliance in each top or rack.",
"It requires organizations to configure and manage an overlay network so that traffic can be routed appropriately.",
"It slows down all server-to-server and VM-to-VM traffic by sending it to a centralized security appliance."
],
correct:3, topic:"Data Center"
},

{
question:"An IT security admin’s priority is to manage the security risks from a growing number of personal and IoT devices on the network. Which feature of HPE Aruba Networking Central should you emphasize?",
options:[
"HPE GreenLake for Networking solutions require management services from HPE Aruba Networking, reducing the risk of human errors.",
"HPE Aruba Networking Unified Infrastructure eases integration in a heterogeneous environment and simplifies management.",
"HPE Aruba Networking Device Insight provides real-time visibility and monitoring of all devices connected to the network.",
"HPE Aruba Networking SD-WAN solutions send traffic to the data center for monitoring and behavior analysis."
],
correct:2, topic:"Security"
},

{
question:"What is one way that HPE Aruba Networking unified SASE helps customers to reduce costs?",
options:[
"It eliminates the need for network admins to review security alerts or address flagged anomalies.",
"It embeds all the security features that customers need in HPE Aruba Networking APs and switches.",
"It allows customers to consolidate multiple point solutions into fewer solutions.",
"It is provided as part of the base features in an HPE Aruba Networking Central license."
],
correct:2, topic:"SASE"
},

{
question:"Which customer requirement would HPE Aruba Networking Central with AI for Networking address?",
options:[
"The customer’s IT team is understaffed or underqualified to troubleshoot and optimize the network.",
"The customer needs to implement role-based security across the wired and wireless networks.",
"The customer wants to develop sophisticated maps for location-based services.",
"The customer wants to allow users to access applications remotely."
],
correct:0, topic:"Aruba Central"
},

{
question:"What is one way organizations can ensure their wireless network is always available?",
options:[
"Use HPE Aruba Networking CX features to orchestrate software switch updates without causing downtime.",
"Receive troubleshooting insights from HPE Aruba Networking ClearPass Policy Manager.",
"Use HPE Aruba Networking Fabric Composer to create a resilient software fabric for the wireless network.",
"Use HPE Aruba Networking ClearPass Device Insight to proactively detect issues before they cause problems."
],
correct:0, topic:"Wireless"
},

{
question:"You are talking to a customer about HPE Aruba Networking data center solutions. What is one differentiator you should emphasize?",
options:[
"HPE Aruba Networking Central can be easily upgraded to include management of the data center switches.",
"HPE Aruba Networking data center switches use a different OS than edge switches, which is designed specifically for data center environments.",
"HPE Aruba Networking Fabric Composer simplifies the configuration of complex technologies.",
"All HPE Aruba Networking data center switches include a stateful firewall, increasing security."
],
correct:2, topic:"Data Center"
},

{
question:"You are meeting with a data center manager about upgrading switches in the data center. Which topic should you discuss to start the conversation about HPE Aruba Networking CX switches?",
options:[
"Challenges with implementing zero trust security in the data center.",
"The need to secure IoT devices so they cannot be used in cyber attacks.",
"Need for advanced, location-based services to enhance users’ experiences.",
"Whether the customer knows how many devices are connected in the data center."
],
correct:3, topic:"Data Center"
},

/* =======================
   PREGUNTAS 21–30
   ======================= */

{
question:"You have recently upgraded a customer’s campus network with HPE Aruba Networking CX switches. How might you pursue an additional opportunity?",
options:[
"Investigate opportunities for selling additional Advanced subscriptions for HPE Aruba Networking Central to unlock advanced switching features.",
"Discuss whether the customer is interested in enhancing the user’s experience with the location-based services embedded in HPE Aruba Networking CX switches.",
"Discuss whether the customer is deploying new, more demanding applications, which might mean that it is time to upgrade the new switches again.",
"Investigate whether the customer needs an upgrade to their data center network, explaining that HPE Aruba Networking offers the same switching OS and operating model for the data center."
],
correct:1, topic:"Wireless"
},

{
question:"What is a common challenge driving customers to upgrade their networks?",
options:[
"The wired network does not support the correct Ethernet technologies for users and IoT devices.",
"The wireless network cannot deliver the performance users need.",
"The network core and the network edge cannot interoperate with each other.",
"Most network vendors only provide command line interfaces for network devices, not easy-to-use GUIs."
],
correct:1, topic:"Wireless"
},

{
question:"What is one of the advantages of selling HPE GreenLake for Networking Service Packs?",
options:[
"They enable you to add HPE Aruba Networking Intelligent Operations at discounted rate.",
"They enable you to provide customers with fully customizable network-as-a-service solutions.",
"They simplify the process of designing and selling network-as-a-service solutions to customers.",
"They enable you to sell HPE Aruba Networking solutions not available as traditional purchases."
],
correct:2, topic:"GreenLake"
},

{
question:"What is one value provided by HPE Aruba Networking Cloud Access Security Broker (CASB)?",
options:[
"Improving quality of experience for branch users running SaaS applications.",
"Replacing a traditional virtual private network (VPN) for remote users with a more secure alternative.",
"Preventing users from sharing restricted data when using SaaS applications.",
"Accelerating performance for real-time apps across all of a customer’s sites."
],
correct:2, topic:"Security"
},

{
question:"Which outcome could the customer achieve with Network Insights in HPE Aruba Networking Central?",
options:[
"Automatically detect any client connecting to the network and block any client with suspicious behavior.",
"Search for users, endpoints, or locations status; provide a status report; and automatically resolve any issues detected.",
"Detect and profile Internet of Things (IoT) devices connected to the network.",
"Identify performance issues and follow recommendations for resolving the issue."
],
correct:3, topic:"Aruba Central"
},

{
question:"What is one way that HPE Aruba Networking Central Client Insights helps customers minimize risks?",
options:[
"It integrates with HPE Aruba Networking Fabric Composer to automatically configure the correct distributed firewall policies for a particular customer’s environment.",
"It enables zero trust security for a remote workforce by replacing the traditional virtual private network (VPN).",
"It acts as a central repository for security events, logs, metrics, and other information collected by HPE Aruba Networking devices and third-party security solutions.",
"It helps customers implement a ZTNA strategy by applying least-privilege access controls to each device, based on high confidence in device."
],
correct:3, topic:"Security"
},

{
question:"What is one way that HPE Aruba Networking Central helps to simplify protecting the network?",
options:[
"By integrating with HPE Aruba Networking private 5G solutions to automatically enhance the security for Wi-Fi 5, 6, and 7 devices.",
"By automatically adding rules to role-based access control policies in response to new types of threats.",
"By providing a “sandbox” environment, in which traffic can be safely inspected for malware.",
"By providing policy recommendations that admins can quickly preview and apply."
],
correct:3, topic:"Security"
},

{
question:"How does selling HPE GreenLake for Networking solutions benefit Channel partners?",
options:[
"They can sell HPE Aruba Networking solutions that are not available as traditional purchases.",
"They can offer their customers a significantly lower price per unit cost than a traditional networking purchase.",
"They can include their company’s services as part of an HPE GreenLake for Networking solution.",
"They can convert their existing customers to lease agreements to extend the customer engagement."
],
correct:2, topic:"GreenLake"
},

{
question:"A customer has a heterogeneous network with some HPE Aruba Networking APs, as well as some third-party switches and other network infrastructure. The customer needs better visibility into the endpoints connected across the entire network. Which HPE Aruba Networking solution meets this need?",
options:[
"HPE Aruba Networking ClearPass Device Insight",
"HPE Aruba Networking Central Client Insights",
"HPE Aruba Networking Central NetConductor",
"HPE Aruba Networking Fabric Composer"
],
correct:0, topic:"Security"
},

{
question:"Which correctly describes the HPE Aruba Networking EdgeConnect SD-WAN approach to optimizing performance?",
options:[
"Admins optimize the network using the solutions’ highly granular configuration settings and optimization parameters.",
"The solution automatically adjusts how it handles traffic based on current conditions and simple, business-intent-based policies.",
"Admins integrate the solution with best-of-breed WAN and Internet service providers to deliver superior optimization.",
"The solution focuses on securing traffic and offloads performance optimization to the underlying network infrastructure."
],
correct:1, topic:"SD-WAN"
},

/* =======================
   PREGUNTAS 31–40
   ======================= */

{
question:"Which customer challenge indicates a good opportunity for selling HPE Aruba Networking EdgeConnect SD-WAN solutions?",
options:[
"The customer is looking for ways to improve performance for cloud apps at branches.",
"The customer needs to simplify troubleshooting for the HPE Aruba Networking infrastructure devices already deployed at the main office.",
"The customer needs to simplify by deploying a consistent switching platform across the campus and data center.",
"The customer’s remote, work-from-home workforce is growing, and the current VPN solution can no longer scale to meet the needs."
],
correct:0, topic:"SD-WAN"
},

{
question:"A customer wants to know what makes HPE Aruba Networking ZTNA better than a traditional virtual private network (VPN). What is one key distinguishing value?",
options:[
"The cloud-based solution seamlessly scales to accommodate customers’ growing remote workforce.",
"HPE Aruba Networking ZTNA decreases complexity with its on-prem management platform.",
"The cost of the solution is lower than a traditional VPN because HPE Aruba Networking ZTNA uses HPE Aruba Networking gateways.",
"HPE Aruba Networking ZTNA shrinks the attack surface by automatically creating and applying least-privilege policies."
],
correct:3, topic:"Security"
},

{
question:"What is one key feature that distinguishes HPE Aruba Networking EdgeConnect SD-WAN from other SD-WAN solutions?",
options:[
"HPE Aruba Networking EdgeConnect SD-WAN offers specialized hardware and architectures for branches of different size rather than addressing those use cases with a single architecture.",
"HPE Aruba Networking EdgeConnect SD-WAN offers a higher quality of user experience and a simpler, more automated management experience than most competitors.",
"HPE Aruba Networking EdgeConnect SD-WAN can interconnect many sites while most competitors can only connect two or three.",
"HPE Aruba Networking EdgeConnect SD-WAN ensures that all branch traffic passes through the data center for security purposes while many competitors allow branch traffic direct access to the Internet."
],
correct:1, topic:"SD-WAN"
},

{
question:"What is one advantage of HPE Aruba Networking private 5G?",
options:[
"It provides a complete solution for ultra-reliable, high-performance connectivity.",
"It simplifies deployment by providing a one-size fits all solution.",
"Organizations can repurpose their existing HPE Aruba Networking APs for private 5G.",
"Organizations can manage their 5G network with HPE Aruba Networking Fabric Composer."
],
correct:0, topic:"Private 5G"
},

{
question:"What is one use case for HPE Aruba Networking Central with AI for Networking?",
options:[
"Enhancing custom applications developed in-house by integrating AI into the apps.",
"Providing recommendations to optimize the network based on site comparisons.",
"Simplifying the architecture of a data center attached to the campus.",
"Enhancing the deployment of IoT devices by delivering an analytics platform at the edge."
],
correct:1, topic:"Aruba Central"
},

{
question:"What is one way that HPE Aruba Networking Central helps to simplify protecting the network?",
options:[
"By automatically adding rules to role-based access control policies in response to new types of threats.",
"By integrating with HPE Aruba Networking private 5G solutions to automatically enhance the security for Wi-Fi 5, 6, and 7 devices.",
"By providing a “sandbox” environment, in which traffic can be safely inspected for malware.",
"By providing policy recommendations that admins can quickly preview and apply."
],
correct:3, topic:"Security"
},

{
question:"You are proposing HPE Aruba Networking APs and switches, managed by HPE Aruba Networking Central, to a security-minded customer. What is one distinguishing value that you should highlight?",
options:[
"HPE Aruba Networking Central NetConductor directs APs and switches to apply granular, role-based access control at the edge, in-line with the traffic flow.",
"HPE Aruba Networking ClearPass Device Insight automates the configuration of security policies across the complete network infrastructure.",
"HPE Aruba Networking Fabric Composer establishes a secure network overlay across APs and switches.",
"HPE Aruba Networking APs and switches tunnel all traffic to HPE Aruba Networking Central, which applies advanced cloud security features."
],
correct:0, topic:"Security"
},

{
question:"Which advantage does HPE Aruba Networking Fabric Composer provide?",
options:[
"It dynamically reroutes traffic when bottlenecks occur on the network.",
"It provides visibility into both physical and virtual networks.",
"It allows IT to provision both HPE Aruba Networking switches and APs.",
"It uses AI to detect issues and provide recommendations for addressing them."
],
correct:1, topic:"Data Center"
},

{
question:"A customer wants to accelerate digital transformation while reducing operational complexity. How should you position HPE Aruba Networking’s strategy?",
options:[
"By emphasizing the need to refresh all hardware before enabling automation.",
"By recommending isolated point products for each networking function.",
"By explaining how a unified, AI-driven platform simplifies operations while aligning with business objectives.",
"By focusing only on increasing port density in the switching infrastructure."
],
correct:2, topic:"Strategy"
},

{
question:"A CIO is focused on reducing risk while enabling hybrid work. Which Aruba approach best maps technology to that business outcome?",
options:[
"Centralizing all traffic back to the data center for inspection.",
"Implementing Zero Trust and SASE to enforce least-privilege access regardless of user location.",
"Deploying more traditional VPN concentrators.",
"Segmenting only the wired network."
],
correct:1, topic:"SASE"
},

/* =======================
   PREGUNTAS 41–50
   ======================= */

{
question:"When discussing Aruba solutions with executive leadership, what should be emphasized?",
options:[
"The number of CLI commands supported by Aruba switches.",
"Hardware specifications and ASIC architectures.",
"Business outcomes such as improved resilience, reduced risk, and operational efficiency.",
"The total number of access points deployed globally."
],
correct:2, topic:"Strategy"
},

{
question:"How does HPE Aruba Networking Central with AI for Networking support business alignment?",
options:[
"By replacing the need for IT staff.",
"By increasing manual configuration flexibility.",
"By delivering insights and recommendations that reduce downtime and improve user experience.",
"By requiring dedicated on-premises analytics servers."
],
correct:2, topic:"Aruba Central"
},

{
question:"What differentiates HPE Aruba Networking from many competitors in campus networking?",
options:[
"Aruba focuses primarily on hardware pricing advantages.",
"Aruba requires separate management tools for wired and wireless.",
"Aruba delivers a unified infrastructure with a single operating model across wired, wireless, and WAN.",
"Aruba limits integration with third-party tools."
],
correct:2, topic:"Strategy"
},

{
question:"Why is AI-driven operations a competitive advantage for Aruba?",
options:[
"Because it eliminates the need for security policies.",
"Because it provides proactive insights and recommendations instead of reactive troubleshooting.",
"Because it centralizes all traffic inspection in a single appliance.",
"Because it replaces SD-WAN solutions."
],
correct:1, topic:"Aruba Central"
},

{
question:"How does HPE Aruba Networking EdgeConnect SD-WAN differentiate from basic SD-WAN offerings?",
options:[
"It requires manual optimization for every application.",
"It forces all branch traffic to traverse the data center.",
"It uses business-intent overlays and dynamic path control to optimize application performance.",
"It only supports MPLS connectivity."
],
correct:2, topic:"SD-WAN"
},

{
question:"What is a key competitive strength of HPE Aruba Networking’s Zero Trust approach?",
options:[
"It applies identical access to all users to simplify management.",
"It depends exclusively on traditional VPN architecture.",
"It enforces role-based, least-privilege access at the edge using identity context.",
"It limits segmentation to data center environments only."
],
correct:2, topic:"Security"
},

{
question:"A customer reports poor SaaS performance at branch locations. How should Aruba resolve this connectivity challenge?",
options:[
"Backhaul all SaaS traffic to the data center.",
"Increase MPLS bandwidth only.",
"Use EdgeConnect SD-WAN to dynamically steer traffic based on real-time conditions.",
"Deploy additional on-prem firewalls at every branch."
],
correct:2, topic:"SD-WAN"
},

{
question:"What connectivity challenge does AI-powered Network Insights address?",
options:[
"Hardware lifecycle management exclusively.",
"Identifying performance issues and recommending corrective actions before users are impacted.",
"Eliminating the need for WAN connectivity.",
"Replacing traditional security tools."
],
correct:1, topic:"Aruba Central"
},

{
question:"How does Aruba simplify troubleshooting across distributed environments?",
options:[
"By requiring on-site manual diagnostics.",
"By separating monitoring tools per network segment.",
"By providing centralized visibility and AI-driven insights across campus, branch, and WAN.",
"By routing all logs to an external third-party platform only."
],
correct:2, topic:"Aruba Central"
},

{
question:"What connectivity benefit does Aruba’s unified management provide?",
options:[
"Independent management systems for each site.",
"Consistent policy enforcement and visibility across multiple locations.",
"Manual configuration per device.",
"Segmentation only at the core layer."
],
correct:1, topic:"Aruba Central"
},

/* =======================
   PREGUNTAS 51–60
   ======================= */

{
question:"What is a key objective of Aruba’s Zero Trust architecture?",
options:[
"Increasing implicit trust within internal networks.",
"Eliminating identity-based policies.",
"Reducing the attack surface by enforcing least-privilege access.",
"Tunneling all traffic through a single gateway."
],
correct:2, topic:"Security"
},

{
question:"How does Client Insights support a Zero Trust strategy?",
options:[
"By replacing identity providers.",
"By identifying and profiling devices to enable policy enforcement based on device confidence.",
"By encrypting all WAN traffic.",
"By functioning as a firewall appliance."
],
correct:1, topic:"Security"
},

{
question:"What distinguishes ZTNA from traditional VPN approaches?",
options:[
"ZTNA increases broad network access once connected.",
"ZTNA depends on perimeter-based trust.",
"ZTNA provides application-level access based on identity and context.",
"ZTNA requires MPLS circuits."
],
correct:2, topic:"Security"
},

{
question:"Why is SASE important in a hybrid work environment?",
options:[
"It centralizes security exclusively in the corporate data center.",
"It eliminates cloud security inspection.",
"It delivers cloud-delivered security services closer to users through distributed PoPs.",
"It limits remote access capabilities."
],
correct:2, topic:"SASE"
},

{
question:"Which trend is significantly influencing modern networking buying decisions?",
options:[
"Reducing automation in IT operations.",
"The growth of hybrid work and distributed users.",
"Eliminating IoT devices from enterprise networks.",
"Returning all applications to on-premises environments."
],
correct:1, topic:"Trends"
},

{
question:"Why are organizations shifting toward consumption-based networking models?",
options:[
"To increase capital expenditures.",
"To reduce flexibility.",
"To align networking costs with actual usage and reduce operational risk.",
"To eliminate managed services."
],
correct:2, topic:"GreenLake"
},

{
question:"How does IoT growth influence networking strategy?",
options:[
"By reducing segmentation needs.",
"By requiring better device visibility and policy-based access control.",
"By eliminating wireless infrastructure needs.",
"By centralizing all IoT traffic in the core only."
],
correct:1, topic:"Security"
},

{
question:"What trend increases the need for AI-driven networking?",
options:[
"Decreasing network complexity.",
"Reduced application dependency on connectivity.",
"Increasing network scale, distributed environments, and performance expectations.",
"Eliminating the need for analytics."
],
correct:2, topic:"Aruba Central"
},

{
question:"A customer believes that traditional VPN provides sufficient security for remote workers. What should you explain about HPE Aruba Networking ZTNA?",
options:[
"It extends full network access once authentication is completed.",
"It replaces identity-based controls with centralized inspection.",
"It grants application-level access based on identity and context instead of network-level access.",
"It routes all traffic through the corporate data center."
],
correct:2, topic:"Security"
},

{
question:"What is one key architectural advantage of SASE compared to traditional perimeter security?",
options:[
"It centralizes all inspection in a single on-prem appliance.",
"It eliminates the need for WAN optimization.",
"It delivers cloud-based security services closer to users through distributed PoPs.",
"It removes the need for identity-based policy enforcement."
],
correct:2, topic:"SASE"
},

/* =======================
   PREGUNTAS 61–70
   ======================= */

{
question:"When is HPE Aruba Networking EdgeConnect SD-WAN the preferred solution over SD-Branch?",
options:[
"When a branch requires only integrated LAN and WLAN management.",
"When the customer requires advanced WAN optimization and dynamic path steering across multiple transports.",
"When the customer wants only wireless upgrades.",
"When MPLS is the only connectivity option."
],
correct:1, topic:"SD-WAN"
},

{
question:"What distinguishes SD-Branch from SD-WAN in Aruba’s portfolio?",
options:[
"SD-Branch focuses exclusively on WAN transport optimization.",
"SD-Branch integrates LAN, WLAN, and gateway management into a unified branch architecture.",
"SD-Branch replaces identity-based policies.",
"SD-Branch eliminates the need for Central management."
],
correct:1, topic:"SD-Branch"
},

{
question:"What is a key benefit of enforcing security policies at the ToR layer in a distributed data center architecture?",
options:[
"It centralizes east-west traffic through a single firewall.",
"It filters traffic locally, reducing latency and avoiding centralized bottlenecks.",
"It eliminates segmentation requirements.",
"It forces all traffic through the core layer."
],
correct:1, topic:"Data Center"
},

{
question:"Why can centralized security appliances negatively impact data center performance?",
options:[
"They simplify overlay networks.",
"They reduce hardware costs.",
"They create hairpinning of server-to-server traffic, increasing latency.",
"They eliminate east-west inspection."
],
correct:2, topic:"Data Center"
},

{
question:"Why is device profiling critical in environments with growing IoT deployments?",
options:[
"IoT devices authenticate using complex identity providers.",
"Many IoT devices lack user credentials, requiring classification to apply appropriate policies.",
"IoT devices always support dynamic segmentation automatically.",
"IoT devices eliminate wireless congestion."
],
correct:1, topic:"Security"
},

{
question:"How does HPE Aruba Networking Client or Device Insights support policy enforcement?",
options:[
"By automatically blocking all unknown devices.",
"By replacing ClearPass completely.",
"By identifying device types with high confidence to enable role-based access controls.",
"By encrypting IoT traffic at the hardware level."
],
correct:2, topic:"Security"
},

{
question:"What differentiates AI-powered Network Insights from traditional monitoring tools?",
options:[
"It requires manual correlation of alerts.",
"It establishes performance baselines and identifies anomalies proactively.",
"It eliminates the need for visibility tools.",
"It centralizes troubleshooting at the data center only."
],
correct:1, topic:"Aruba Central"
},

{
question:"How do site comparisons in Aruba Central improve operations?",
options:[
"By forcing identical hardware configurations.",
"By identifying outliers and performance deviations across similar environments.",
"By replacing WAN optimization.",
"By eliminating firmware updates."
],
correct:1, topic:"Aruba Central"
},

{
question:"A CFO is concerned about unpredictable IT costs. How should HPE Aruba Networking solutions be positioned?",
options:[
"As a hardware-only investment strategy.",
"As a consumption-based model through HPE GreenLake that aligns costs with usage.",
"As a higher upfront CapEx solution.",
"As a replacement for WAN connectivity."
],
correct:1, topic:"GreenLake"
},

{
question:"How does Aruba’s unified architecture support executive-level objectives?",
options:[
"By increasing manual configuration flexibility.",
"By separating management domains.",
"By reducing complexity, improving resilience, and aligning technology with business continuity goals.",
"By focusing solely on hardware performance."
],
correct:2, topic:"Strategy"
}

];
