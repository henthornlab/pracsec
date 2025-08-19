// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="BANNER.html">Introduction</a></li><li class="chapter-item "><a href="tools/tools.html"><strong aria-hidden="true">1.</strong> Tools</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tools/vms.html"><strong aria-hidden="true">1.1.</strong> Virtual Machines</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tools/hypervisors.html"><strong aria-hidden="true">1.1.1.</strong> Hypervisors</a></li><li class="chapter-item "><a href="tools/vm-snapshots.html"><strong aria-hidden="true">1.1.2.</strong> Snapshots</a></li><li class="chapter-item "><a href="tools/vm-shared.html"><strong aria-hidden="true">1.1.3.</strong> Shared Files on VMware</a></li></ol></li><li class="chapter-item "><a href="tools/kali.html"><strong aria-hidden="true">1.2.</strong> Kali Linux</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tools/kali-hyperv.html"><strong aria-hidden="true">1.2.1.</strong> Kali on Hyper-V</a></li><li class="chapter-item "><a href="tools/kali-tweaks.html"><strong aria-hidden="true">1.2.2.</strong> kali-tweaks</a></li><li class="chapter-item "><a href="tools/openssh.html"><strong aria-hidden="true">1.2.3.</strong> SSH into Kali</a></li></ol></li><li class="chapter-item "><a href="tools/winbox.html"><strong aria-hidden="true">1.3.</strong> Quick Windows Box</a></li><li class="chapter-item "><a href="tools/gdb.html"><strong aria-hidden="true">1.4.</strong> Build Tools</a></li><li class="chapter-item "><a href="tools/ghidra.html"><strong aria-hidden="true">1.5.</strong> Ghidra</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tools/ghidra2.html"><strong aria-hidden="true">1.5.1.</strong> Ghidra Issues?</a></li></ol></li><li class="chapter-item "><a href="tools/cyberchefintro.html"><strong aria-hidden="true">1.6.</strong> Cyberchef</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tools/cyberchef.html"><strong aria-hidden="true">1.6.1.</strong> Cyberchef example 1</a></li><li class="chapter-item "><a href="tools/cyberchef2.html"><strong aria-hidden="true">1.6.2.</strong> Cyberchef example 2</a></li></ol></li><li class="chapter-item "><a href="Python/python.html"><strong aria-hidden="true">1.7.</strong> Python</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Python/interactive.html"><strong aria-hidden="true">1.7.1.</strong> Interactive Python</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Python/extendingcolab.html"><strong aria-hidden="true">1.7.1.1.</strong> Extending Colab</a></li></ol></li><li class="chapter-item "><a href="Python/commandline.html"><strong aria-hidden="true">1.7.2.</strong> Single Line Scripts</a></li><li class="chapter-item "><a href="Python/pythonwebserver.html"><strong aria-hidden="true">1.7.3.</strong> Quick Webserver</a></li></ol></li><li class="chapter-item "><a href="tools/vpns.html"><strong aria-hidden="true">1.8.</strong> VPNs</a></li></ol></li><li class="chapter-item "><a href="140/intro.html"><strong aria-hidden="true">2.</strong> CSSE 140</a></li><li class="chapter-item "><a href="141/intro.html"><strong aria-hidden="true">3.</strong> CSSE 141</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="141/week1/week1.html"><strong aria-hidden="true">3.1.</strong> Week 1</a></li><li class="chapter-item "><a href="141/week2/week2.html"><strong aria-hidden="true">3.2.</strong> Week 2</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="141/week2/tar.html"><strong aria-hidden="true">3.2.1.</strong> tar</a></li><li class="chapter-item "><a href="141/week2/unixPasswords.html"><strong aria-hidden="true">3.2.2.</strong> UNIX Passwords</a></li><li class="chapter-item "><a href="141/week2/hash.html"><strong aria-hidden="true">3.2.3.</strong> Hashing</a></li><li class="chapter-item "><a href="141/week2/wordLists.html"><strong aria-hidden="true">3.2.4.</strong> Word Lists</a></li><li class="chapter-item "><a href="141/week2/passwordCracking.html"><strong aria-hidden="true">3.2.5.</strong> Cracking Hashed Passwords</a></li></ol></li><li class="chapter-item "><a href="141/week3/week3.html"><strong aria-hidden="true">3.3.</strong> Week 3</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="141/week3/rfc1918nets.html"><strong aria-hidden="true">3.3.1.</strong> RFC 1918 Networks</a></li><li class="chapter-item "><a href="141/week3/openvpn.html"><strong aria-hidden="true">3.3.2.</strong> OpenVPN Connection</a></li></ol></li></ol></li><li class="chapter-item "><a href="142/intro.html"><strong aria-hidden="true">4.</strong> CSSE 142</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="142/sliver.html"><strong aria-hidden="true">4.1.</strong> C2 and Kali</a></li><li class="chapter-item "><a href="142/sliver2.html"><strong aria-hidden="true">4.2.</strong> C2 and Kali part 2</a></li></ol></li><li class="chapter-item "><a href="fundamentals/fundamentals.html"><strong aria-hidden="true">5.</strong> Fundamentals</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="fundamentals/charencoding.html"><strong aria-hidden="true">5.1.</strong> Character Encoding</a></li><li class="chapter-item "><a href="fundamentals/base64.html"><strong aria-hidden="true">5.2.</strong> Base64 Encoding</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="fundamentals/httpbasic64.html"><strong aria-hidden="true">5.2.1.</strong> HTTP Basic Authentication</a></li></ol></li><li class="chapter-item "><a href="fundamentals/endianness.html"><strong aria-hidden="true">5.3.</strong> Endianness</a></li><li class="chapter-item "><a href="Python/bytes.html"><strong aria-hidden="true">5.4.</strong> Handling bytes in Python</a></li><li class="chapter-item "><a href="Python/pythonxor.html"><strong aria-hidden="true">5.5.</strong> Python XOR</a></li></ol></li><li class="chapter-item "><a href="passwords/passwords-intro.html"><strong aria-hidden="true">6.</strong> Passwords</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="passwords/cracking.html"><strong aria-hidden="true">6.1.</strong> Password cracking</a></li></ol></li><li class="chapter-item "><a href="binaryexploit/binaryexploit.html"><strong aria-hidden="true">7.</strong> Binary Exploits</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="binaryexploit/echo.html"><strong aria-hidden="true">7.1.</strong> Crafting Exploit Strings</a></li><li class="chapter-item "><a href="bufferoverflow/bufferoverflow.html"><strong aria-hidden="true">7.2.</strong> Buffer Overflows</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="bufferoverflow/stack.html"><strong aria-hidden="true">7.2.1.</strong> Stack Organization</a></li></ol></li><li class="chapter-item "><a href="binaryexploit/disas.html"><strong aria-hidden="true">7.3.</strong> Quick Disassembly</a></li><li class="chapter-item "><a href="binaryexploit/formatstring.html"><strong aria-hidden="true">7.4.</strong> Format String Exploit</a></li></ol></li><li class="chapter-item "><a href="injections/injections.html"><strong aria-hidden="true">8.</strong> Injections</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="injections/sqlinjection.html"><strong aria-hidden="true">8.1.</strong> SQL Injections</a></li><li class="chapter-item "><a href="injections/ssti.html"><strong aria-hidden="true">8.2.</strong> Template Injections</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
